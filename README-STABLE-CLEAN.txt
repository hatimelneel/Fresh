INVOICE PRO — STABLE CLEAN
Build: 2026.09.10-STABLECLEAN

WHY THIS VERSION
Older Invoice Pro PWA builds registered sw.js and cached:
  ./, index.html, styles.css, app.js
under cache name invoicepro-v4.
That cache-first service worker can continue serving an old app after GitHub files are replaced.

THIS PACKAGE FIXES THAT BY:
1. Using completely new JS/CSS/logo filenames.
2. Providing stable-20260910.html as a brand-new entry URL.
3. Replacing sw.js with a cleanup worker that deletes old Invoice Pro caches and unregisters itself.
4. Clearing old Invoice Pro Cache Storage from the stable page.
5. Keeping localStorage key invoicepro_rebuilt_v2 unchanged so existing app data is not intentionally reset.

UPLOAD TO GITHUB
Upload ALL files from this ZIP to the same folder currently used by GitHub Pages.
Do not upload only the ZIP.

FIRST OPEN
Open:
  stable-20260910.html
in the same GitHub Pages folder.

If the old interface still appears, open:
  reset-invoicepro-cache.html
once. It will clean the old PWA cache and redirect to the stable page.

EXPECTED BUILD LABEL
  Build 2026.09.10-STABLECLEAN

After confirming this build appears and works, add THIS stable page to the iPhone Home Screen.
