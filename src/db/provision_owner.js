// src/db/provision_owner.js
import crypto from 'node:crypto';
import { db } from './database.js';
import { config } from '../config.js';

const email = 'dangkieutram2006@gmail.com';
const fullName = 'Kiều Trâm';
const password = 'kieuTram@2026';
const salt = crypto.randomBytes(16).toString('hex');
const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
const passwordHash = salt + ':' + hash;
const now = new Date().toISOString();

const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
if (existing) {
  db.prepare(`
    UPDATE users SET role = 'admin', password_hash = ?, email_verified = 1, updated_at = ?
    WHERE id = ?
  `).run(passwordHash, now, existing.id);

  db.prepare(`
    UPDATE profiles SET full_name = ?, updated_at = ?
    WHERE user_id = ?
  `).run(fullName, now, existing.id);

  console.log('Updated existing account to ADMIN:', email);
} else {
  const userId = 'usr_' + crypto.randomUUID().slice(0, 12);
  db.prepare(`
    INSERT INTO users (id, email, password_hash, auth_provider, email_verified, role, is_demo, created_at, updated_at)
    VALUES (?, ?, ?, 'local', 1, 'admin', 0, ?, ?)
  `).run(userId, email, passwordHash, now, now);

  db.prepare(`
    INSERT INTO profiles (
      user_id, full_name, student_id, class_year, avatar_url, bio, phone, social_link,
      skills, project_interests, desired_role, team_status, is_published, directory_visible,
      show_email, show_phone, show_social, show_strengths, is_demo, created_at, updated_at
    ) VALUES (?, ?, 'DE180000', 'K18', '', 'Quản trị viên dự án Know Your Strengths · FUDA', '', '', '[\"Leadership\", \"Project Management\", \"Team Coordination\"]', '[\"Smart Campus\", \"AI in Education\"]', 'Project Admin', 'Đã có nhóm', 1, 1, 1, 1, 1, 1, 0, ?, ?)
  `).run(userId, fullName, now, now);

  console.log('Created new ADMIN account for:', email);
}

db.prepare(`
  INSERT INTO admin_audit_logs (id, admin_id, action, details, created_at)
  VALUES (?, 'system', 'PROVISION_OWNER_ADMIN', ?, ?)
`).run('log_' + crypto.randomUUID().slice(0, 8), `Provisioned owner admin: ${email} (${fullName})`, now);

console.log('SUCCESS: Admin provisioned successfully for:', email);
