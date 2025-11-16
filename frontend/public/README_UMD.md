PLACE THE BROWSER UMD BUILD OF ALGOSDK HERE

This folder is served by Next as `/libs`.

To fix in-browser transaction construction issues, download or copy the browser UMD build of `algosdk` into this folder as `algosdk.min.js`.

Recommended source (already in your project):
- `node_modules/algosdk/dist/browser/algosdk.min.js`

Copy command (PowerShell):

```powershell
# From the frontend project folder
Copy-Item -Path ".\node_modules\algosdk\dist\browser\algosdk.min.js" -Destination ".\public\libs\algosdk.min.js" -Force
```

If you don't have `algosdk` locally (or prefer to fetch):
- Download from a CDN (e.g. jsdelivr):
  https://cdn.jsdelivr.net/npm/algosdk/dist/browser/algosdk.min.js

After placing the file, restart the dev server:

```powershell
cd .\frontend
npm run dev
```

Then retry the Stake flow in the browser. The frontend will prefer the local `/libs/algosdk.min.js` UMD and avoid CDN/tracking blockers.