// src/db/database.js
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DatabaseSync } from 'node:sqlite';
import { config } from '../config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure directory exists
const dbDir = path.dirname(config.dbPath);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

export const db = new DatabaseSync(config.dbPath);

// Set busy timeout so concurrent accesses wait up to 5 seconds
db.exec('PRAGMA busy_timeout = 5000;');
db.exec('PRAGMA foreign_keys = ON;');

try {
  db.exec('PRAGMA journal_mode = WAL;');
} catch (e) {
  // Ignore if already set or locked
}

// Initialize schema
export function initSchema() {
  // Safe migrations for moderation fields in community_posts if table already existed
  try {
    db.exec("ALTER TABLE community_posts ADD COLUMN status TEXT DEFAULT 'approved';");
  } catch (e) {}
  try {
    db.exec("ALTER TABLE community_posts ADD COLUMN moderation_note TEXT;");
  } catch (e) {}
  try {
    db.exec("ALTER TABLE community_posts ADD COLUMN reviewed_by TEXT;");
  } catch (e) {}
  try {
    db.exec("ALTER TABLE community_posts ADD COLUMN reviewed_at TEXT;");
  } catch (e) {}

  const schemaPath = path.join(__dirname, 'schema.sql');
  const schemaSql = fs.readFileSync(schemaPath, 'utf8');
  db.exec(schemaSql);
}

// Transaction wrapper
export function transaction(fn) {
  db.exec('BEGIN TRANSACTION;');
  try {
    const result = fn();
    db.exec('COMMIT;');
    return result;
  } catch (err) {
    db.exec('ROLLBACK;');
    throw err;
  }
}

// Run schema initialization immediately
initSchema();
