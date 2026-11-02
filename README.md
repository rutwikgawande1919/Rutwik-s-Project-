# DealerDrive

A multi-page HTML, CSS and JavaScript version of the supplied DealerDrive design. The forest-green and sage home page, illustration, sample cars and seller styling are preserved. Each page has its own HTML, CSS and JavaScript file. There is no admin page.

## Run

1. Extract the ZIP completely.
2. With Node.js installed, double-click `start.bat`, or run `node server.js` in this folder.
3. Open http://127.0.0.1:8000 in your browser.

Alternative: run `python -m http.server 8000` in this folder, or use VS Code Live Server. No npm installation or build is required. You can open `index.html` directly, but a local server is recommended because browsers handle storage between `file:` pages differently.

## Page files

| Page | HTML | CSS | JavaScript |
| --- | --- | --- | --- |
| Home | index.html | css/index.css | js/index.js |
| Car list/search | buy.html | css/buy.css | js/buy.js |
| Car details/EMI | car-details.html | css/car-details.css | js/car-details.js |
| Shortlist | shortlist.html | css/shortlist.css | js/shortlist.js |
| Seller evaluation | sell.html | css/sell.css | js/sell.js |
| Estimate confirmation | estimate.html | css/estimate.css | js/estimate.js |
| Payment details | payment.html | css/payment.css | js/payment.js |
| Services | services.html | css/services.css | js/services.js |
| Customer support | support.html | css/support.css | js/support.js |
| Appointment requests | booking.html | css/booking.css | js/booking.js |
| Demo profile | sign-in.html | css/sign-in.css | js/sign-in.js |

Shared files avoid repeating common code:

- `css/shared.css`: branding, navigation, forms, cards and responsive shared layouts.
- `css/utilities.css`: static CSS generated from the supplied design; Tailwind is not loaded at runtime.
- `js/shared.js`: navigation, browser storage, shortlist actions and reusable car cards.
- `js/catalog.js`: shared search and filters for Home and Buy.
- `js/data.js`: the three original sample car listings.
- `assets/car-placeholder.svg`: local illustration used if a remote vehicle photo fails.
- `server.js`: optional static server, not a backend API.

No inline JavaScript handlers or inline style blocks remain in the HTML.

## Main flows

Buyer: Home → Buy a car → Car details → Save to shortlist / Plan a test drive.

Seller: Home → Sell your car → Enter vehicle details → Separate estimate page → Confirm → Separate payment page → Save masked demo details.

The service and support pages from the earlier request are also included. The seller flow ends at the payment page.

## Working front-end behaviour

- Make/model search, body-type filters and empty results.
- Separate car detail links, correct car features/score, and EMI controls with changing percentage/tenure labels.
- Shortlist additions/removals persist across pages and reloads.
- City selection persists; the inventory remains the same sample dataset in each city.
- Valuation responds to vehicle age, mileage and condition. Editing restores the previous inputs.
- Payment fields validate account-number format, matching confirmation and IFSC format. Only holder name, IFSC, last four digits and a timestamp are saved. Full account numbers are cleared after saving.
- Appointment date/phone validation, local request IDs, saved history and cancellation.
- Support ticket phone validation, safe rendering of text, local history and closing a request.
- Mobile navigation, visible keyboard focus, form labels and status messages.

## Demo boundaries

This is a browser-local project, not a live dealership platform. It does not send SMS/OTP, authenticate real accounts, notify dealers, verify bank accounts, transfer money, approve loans or fetch current market prices. The profile page is explicitly a local demo profile.

Requests and profiles use localStorage on the current browser/origin. They are not synchronized to other devices. Use sample data. A production version needs a backend, proper authentication, a database, authorization, and appropriate bank/payment integrations.

The EMI uses a fixed illustrative annual interest rate of 9.5%, excluding fees. The valuation uses simplified demo assumptions. All inventory prices and descriptions come from the supplied sample.

Google Fonts and the supplied Wikimedia photo URLs need internet access. The layout and interactions use local files; if photos fail, the local illustration appears. Replace `image` in `js/data.js` with your own licensed local vehicle photos for an entirely local project.

## Checks

See `CHECKS.md` for the completed verification and remaining limits.
