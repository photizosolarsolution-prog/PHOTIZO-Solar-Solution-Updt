# PHÓTIZÓ Solar Solutions — Version 6

This is a static website for PHÓTIZÓ Solar Solutions and PHÓTIZÓ Vocational Training Centre.

## What's new in Version 6

- Subtle scroll-reveal animations and restrained hover transitions.
- Respects the visitor's reduced-motion accessibility preference.
- Improved keyboard focus visibility and a skip-to-content link.
- Removed a repeated Admissions navigation item.
- Replaced externally hosted product images with local illustrative SVG artwork so the solar product and portable-power galleries render reliably when deployed. These illustrations are not photographs of the exact branded products.
- Added a basic privacy notice at `privacy.html`.
- Added social-sharing metadata, a favicon, `robots.txt`, and basic Netlify security headers.
- Kept the existing enquiry workflow: it opens a WhatsApp message and does not store enquiries in a website database.

## Preview locally

Open `index.html` in a modern browser. For best results, use a local static server or Netlify's deploy preview rather than opening directly from a file manager.

## Temporary hosting on Netlify

1. Create or sign in to a Netlify account: https://app.netlify.com/signup
2. Extract the downloaded ZIP archive.
3. Open https://app.netlify.com/drop
4. Drag the extracted `photizo_solar_website_v3` folder onto the drop area. The folder must contain `index.html` at its top level, plus `styles.css`, `script.js`, `product-gallery.css`, `assets/`, and `privacy.html`.
5. Netlify will publish a temporary `*.netlify.app` address. Rename the site in Netlify's site settings if a preferred name is available.
6. Test the published address on desktop and mobile, including the navigation, WhatsApp enquiry, admissions form link, video, product gallery and privacy notice.

The website has been prepared for Netlify, but it has **not** been uploaded or published because that requires access to the PHÓTIZÓ Netlify account.

## Connecting the official domain later

In Netlify, open the site's Domain management area and add the domain after purchasing it. Follow the DNS records Netlify displays and complete its domain verification and HTTPS setup. Keep the Netlify site; connecting a custom domain does not require rebuilding the static website.

## Before public launch

- Replace illustrative product artwork with genuine product photographs that PHÓTIZÓ owns or is authorized to use, if available. Verify each model and specification against its current datasheet.
- Review the privacy notice against actual admissions and records-management practices and applicable Cameroon requirements.
- Test all content and forms on real mobile devices.
- Confirm that the Google admissions form is still the intended live form and that its questions and destination spreadsheet are correct.
- Consider a dedicated admissions portal later. The current Google Form is not a full student-management system.
- Add the final official domain to canonical metadata and create a domain-specific XML sitemap after the domain is selected.

## Important functional notes

- The contact form opens WhatsApp; it does not save enquiries to a database.
- The admissions button opens the existing external Google Form.
- This static website does not include staff accounts, application tracking, online payment processing or a student-management database. Those belong in the separately planned admissions application.
