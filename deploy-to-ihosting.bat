@echo off
echo ========================================
echo Alpha Ahead - ihosting Deployment Script
echo ========================================
echo.

echo Step 1: Building the project...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed! Please check the errors above.
    pause
    exit /b 1
)

echo.
echo Step 2: Build completed successfully!
echo.
echo Step 3: Deployment files are ready in the 'build' folder
echo.
echo Next steps:
echo 1. Log in to your ihosting control panel
echo 2. Navigate to your domain's file manager
echo 3. Go to the 'public_html' or 'www' folder
echo 4. Upload ALL contents from the 'build' folder
echo 5. Test your website
echo.
echo Files to upload:
echo - index.html
echo - static/ folder (with all CSS and JS files)
echo - .htaccess file
echo - All images and assets
echo - favicon.ico
echo - manifest.json
echo - robots.txt
echo.
echo For detailed instructions, see DEPLOYMENT-GUIDE.md
echo.
echo Press any key to open the build folder...
pause >nul
explorer build
echo.
echo Deployment script completed!
pause

