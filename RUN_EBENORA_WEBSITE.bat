@echo off
title Ebenora Creations - Main Website Localhost
color 0a

echo =====================================================================
echo                 EBENORA CREATIONS - MAIN WEBSITE
echo =====================================================================
echo.
echo Opening browser: http://localhost:8000 ...
echo.

start "" "http://localhost:8000"

netstat -ano | findstr :8000 | findstr LISTENING >nul
if %errorlevel% equ 0 (
    echo [OK] Local server is ALREADY running on port 8000!
    echo Browser has been opened to Ebenora Creations.
    pause
    exit /b
)

call npm run dev

pause
