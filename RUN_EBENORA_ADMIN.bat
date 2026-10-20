@echo off
title Ebenora Creations - Localhost Server & Admin Panel
color 0b

echo =====================================================================
echo                 EBENORA CREATIONS - LOCALHOST ENGINE
echo =====================================================================
echo.
echo Your server is configured for PORT 8000.
echo Opening browser: http://localhost:8000/#/admin ...
echo.
echo Master Passcode: EBENORA@2008
echo =====================================================================
echo.

:: Open browser directly to port 8000 /#/admin
start "" "http://localhost:8000/#/admin"

:: Check if port 8000 is already running
netstat -ano | findstr :8000 | findstr LISTENING >nul
if %errorlevel% equ 0 (
    echo [OK] Local server is ALREADY running on port 8000!
    echo Browser has been opened to your Admin Control Center.
    echo.
    echo You can keep this window open or press any key to close it.
    pause
    exit /b
)

:: Otherwise start Vite
echo Starting local Vite development server on port 8000...
call npm run dev

pause
