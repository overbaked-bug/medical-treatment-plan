# Treatment Plan Generator

A simple static web app for practitioners to generate patient treatment plans from a shared treatment catalog, with practitioner-specific pricing.

## How it works

1. Practitioner selects their name and enters the patient's name and concerns.
2. Practitioner selects one or more treatments from the dropdown(s).
3. App pulls treatment details (proof points, pain level, downtime, duration) from `catalog.js`.
4. App pulls pricing from `practitioner-pricing.js` (falls back to the catalog's base price if no override exists).
5. Clicking **Generate treatment plan** produces a plan with:
   - Consultation summary
   - Patient concerns (free text entered before generation)
   - Recommended treatments with full details and pricing
   - Total estimated price
6. Plan can be printed / saved as PDF directly from the browser.

## File structure

```
├── index.html              # Main app (UI + logic)
├── catalog.js               # Master treatment catalog (shared across all practitioners)
├── practitioner-pricing.js  # Practitioner-specific pricing overrides
└── README.md
```

## Editing the treatment catalog

Open `catalog.js` and add/edit entries in the `TREATMENT_CATALOG` array. Each treatment needs:

| Field        | Description                                  |
|--------------|-----------------------------------------------|
| `id`         | Unique ID, e.g. `tx_009`                      |
| `name`       | Treatment name                                |
| `category`   | Grouping shown in the dropdown                |
| `proofPoints`| Array of short benefit statements             |
| `painLevel`  | 1 (none) to 5 (high)                          |
| `downtime`   | Recovery description                          |
| `duration`   | Appointment length                            |
| `basePrice`  | Fallback price if no practitioner price set   |

## Editing practitioner pricing

Open `practitioner-pricing.js` and edit the `PRACTITIONERS` array.

- `practitionerPrice` — the price charged to the patient
- `therapistPrice` — 70% of `practitionerPrice`, stored explicitly (not auto-calculated at runtime, so past plans stay accurate if prices change)

Use the included `calcTherapistPrice(practitionerPrice)` helper to compute the 70% value when adding new entries.

To add a new practitioner, copy an existing block and update `practitionerId`, `name`, and `pricing`.

## Hosting on GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under "Build and deployment", select **Deploy from a branch**, choose `main` and `/ (root)`.
4. Your app will be live at `https://<username>.github.io/<repo-name>/`.

## Notes

- All data is currently hardcoded in JS files for simplicity — no backend or database required.
- Prices are shown in RM (Malaysian Ringgit); change the currency label in `index.html` if needed.
