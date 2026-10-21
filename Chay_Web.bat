@echo off
title Khoi Dong Know Your Strengths Platform
echo ========================================================
echo   DANG KHOI DONG HE THONG "KNOW YOUR STRENGTHS"
echo ========================================================
echo.
echo 1. Dang mo trinh duyet den: http://localhost:3000 ...
start http://localhost:3000
echo.
echo 2. Dang bat may chu Server...
cd /d "C:\Users\Dell\OneDrive\Desktop\know-your-strengths"
node src/server.js
pause
