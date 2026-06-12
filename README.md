# Treatment Plan Generator

A front-end web app that lets aesthetic clinic practitioners build patient treatment plans on the fly — selecting recommended treatments from a catalog, choosing role-based pricing, and generating a clean, printable summary to share with patients.

**[Live demo →](#)** *(add your GitHub Pages link here)*

## Why I built this

Clinics often hand-write or copy-paste treatment plans during consultations, which is slow and inconsistent. This app turns that into a guided, dropdown-driven workflow: pick the practitioner, note the patient's concerns, select recommended treatments, and instantly generate a structured plan with proof points, pain levels, downtime, and pricing — ready to print or save as a PDF.

## Key features

- **Treatment catalog** — centralised data for each treatment (category, benefits, pain level, downtime, duration, base price)
- **Role-based pricing** — practitioners can select "Practitioner price" or "Therapist price" per treatment, with business rules enforced (e.g. injectables are practitioner-only, reflecting real scope-of-practice constraints)
- **Dynamic plan generation** — consultation summary, patient concerns, and itemised treatment recommendations are assembled automatically from form inputs
- **Print/PDF export** — one-click print view styled separately from the builder UI
- **Branded layout** — clinic logo and name displayed across the app and generated plans

## Tech stack

- Vanilla HTML, CSS, and JavaScript — no frameworks or build tools
- Data-driven UI: catalog and pricing are structured as JS objects, making the app easy to extend without touching the rendering logic
- Print-specific CSS (`@media print`) for clean PDF output

## What this demonstrates

- Translating a real-world workflow (clinical consultation → treatment plan) into a usable UI
- Structuring reusable data models (treatment catalog, practitioner pricing) separate from presentation logic
- Implementing conditional UI logic based on business rules (role-based pricing, category restrictions)
- Building responsive, print-aware layouts with plain CSS

## Running locally

This is a static site — no build step or dependencies required.

1. Clone or download this repository
2. Open `index.html` in a browser

## File structure

```
├── index.html   # App UI, styles, and logic (treatment catalog and pricing data included)
├── logo.svg     # Clinic logo
└── README.md
```

## Possible extensions

- Connect to a real backend/database for multi-clinic, multi-user data
- Add authentication so practitioners only see their own pricing
- Export to branded PDF templates rather than browser print
- Track generated plans for reporting/analytics
