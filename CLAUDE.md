# Project rules

## Git
- Always commit and push directly to `main` (no feature branches, no pull requests).
- All commits must be authored as **devsynx**. Before committing, run:
  ```bash
  git config user.name "devsynx"
  git config user.email "devsynxoffical@users.noreply.github.com"
  ```
- Do not add `Co-Authored-By`, `Claude-Session` or any other AI attribution lines to commit messages.

## Deployment
- Every push to `main` auto-deploys via `.github/workflows/deploy.yml`
  (build → FTPS upload to `ftp.alphaaheadllc.com` → live-site check).
- After pushing, check the "Deploy to iHosting (FTP)" run in GitHub Actions is green.
