@echo off
echo ========================================
echo Uploading Missing Files to GitHub
echo ========================================
echo.

echo Step 1: Adding all missing files...
git add public/
git add .gitignore
git add -A

echo.
echo Step 2: Committing changes...
git commit -m "Add missing public folder with all images and assets"

echo.
echo Step 3: Pushing to GitHub...
git push origin main

echo.
echo Step 4: Verifying upload...
git status

echo.
echo Upload completed! Check your GitHub repository.
pause

