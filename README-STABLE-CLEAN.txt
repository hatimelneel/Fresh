INVOICE PRO — STABLE DATA REPAIR
Build: 2026.09.10-STABLE-DATAREPAIR

This build is based on STABLECLEAN.
It does NOT add new restore logic.

What changed:
- Startup data normalization is now type-safe.
- Old numeric phone/reference/customer fields are converted to text.
- Null/broken entries are ignored safely.
- The repaired database is saved back to the SAME localStorage key:
  invoicepro_rebuilt_v2
- A brand-new JS/CSS filename and entry page bypass old Safari/GitHub cache.

After uploading ALL extracted files to GitHub Pages, open:
  stable-datarepair-20260910.html

Expected build:
  Build 2026.09.10-STABLE-DATAREPAIR

If the app works normally there, use that page for Add to Home Screen.
