@echo off
echo ========================================
echo   Goldmart Website Deployment Helper
echo ========================================
echo.

echo Step 1: Building your project...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Build failed! Please check errors above.
    pause
    exit /b 1
)

echo.
echo ✅ Build successful!
echo.

if not exist "dist" (
    echo ❌ dist folder not found. Build may have failed.
    pause
    exit /b 1
)

echo Step 2: Checking git status...
git status >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Git not initialized. Initializing...
    git init
    git add .
    git commit -m "Goldmart - Ready to deploy"
    echo.
    echo ✅ Git initialized!
    echo.
    echo 📝 Next steps:
    echo    1. Create a repository on GitHub.com
    echo    2. Run: git remote add origin YOUR_GITHUB_REPO_URL
    echo    3. Run: git push -u origin main
    echo    4. Go to vercel.com and import your repo
    echo.
) else (
    echo.
    echo ✅ Git repository found!
    echo.
    echo 📝 Next steps:
    echo    1. Push to GitHub: git push
    echo    2. Go to vercel.com
    echo    3. Import your GitHub repository
    echo    4. Click Deploy
    echo.
)

echo ========================================
echo   Your project is ready to deploy!
echo ========================================
echo.
echo Deployment options:
echo   1. Vercel (Recommended): https://vercel.com
echo   2. Netlify: https://netlify.com
echo   3. See DEPLOY_NOW.md for detailed guide
echo.
pause
