# benjaminhuang13.github.io

# npm

- `npm run start` starts development preview in browser
- `npm run build && npm run deploy` builds the React app and deploys it to GitHub Pages. The `gh-pages` package handles everything automatically — no need to manually checkout or push the `gh-pages` branch.

## git

- `git add .` adds new changes to staging area
- `git commit -m "comment"` captures a snapshot of projects currently staged changes
- `git push origin` pushes the snapshot to online github directory

## Helpful Resources:

- https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f

## Styling Credits:

- Anastasia Goodwin: https://codepen.io/agoodwin/pen/NMJoER
- Yusuke Nakaya: https://codepen.io/YusukeNakaya/pen/XyOaBj
- https://css-tricks.com/snippets/css/typewriter-effect/
- Icons designed by me, Ben Huang!

## Claude skills/plugins

- https://github.com/JuliusBrussee/caveman
  `claude plugin marketplace add JuliusBrussee/caveman && claude plugin install caveman@caveman`

## Claude install (Windows)

https://use-claude.com/index

- Install `irm https://use-claude.com/install.ps1 | iex`
- Update PATH
  -- Click the Start Menu (Windows icon).
  -- Type environment variables.
  -- Click Edit the system environment variables.
  -- In the System Properties window, click Environment Variables... at the bottom.
  -- Under User variables for benjh, click Path.
  -- Click Edit...
  -- Click New.
  -- Add this the path, ie `C:\Users\USER\.local\bin`
  -- click OK
  -- restart terminal

TODO:
├────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────┤
│ innerHTML template literal in aws-sec/index.html │ ⚠️ Safe now (hardcoded data) — must sanitize before pulling from backend │
├────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────┤
│ No CSP headers │ ⚠️ Add when deploying backend │
├────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────┤
│ Auth token storage │ ⚠️ Use HttpOnly cookies, not localStorage │
├────────────────────────────────────────────────────┼──────────────────────────────────────────────────────────────────────────┤
│ CSRF protection │ ⚠️ Needed when you add POST endpoints │
└────────────────────────────────────────────────────┴──────────────────────────────────────────────────────────────────────────┘
