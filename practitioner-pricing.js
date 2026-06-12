// practitioner-pricing.js
// Practitioner-specific pricing overrides.
// therapistPrice = 70% of practitionerPrice (calculated and stored explicitly
// so historical plans stay accurate if pricing changes later).
//
// To add a new practitioner: copy a block, change practitionerId/name,
// and set practitionerPrice for each treatment. Run the helper at the
// bottom (or just compute manually) to fill in therapistPrice.

const PRACTITIONERS = [
  {
    practitionerId: "prac_01",
    name: "Dr. Sarah Lim",
    pricing: [
      { treatmentId: "tx_001", practitionerPrice: 280, therapistPrice: 196 },
      { treatmentId: "tx_002", practitionerPrice: 200, therapistPrice: 140 },
      { treatmentId: "tx_003", practitionerPrice: 380, therapistPrice: 266 },
      { treatmentId: "tx_004", practitionerPrice: 480, therapistPrice: 336 },
      { treatmentId: "tx_005", practitionerPrice: 90,  therapistPrice: 63  },
      { treatmentId: "tx_006", practitionerPrice: 320, therapistPrice: 224 },
      { treatmentId: "tx_007", practitionerPrice: 220, therapistPrice: 154 },
      { treatmentId: "tx_008", practitionerPrice: 420, therapistPrice: 294 }
    ]
  },
  {
    practitionerId: "prac_02",
    name: "Dr. Aiman Yusof",
    pricing: [
      { treatmentId: "tx_001", practitionerPrice: 250, therapistPrice: 175 },
      { treatmentId: "tx_002", practitionerPrice: 180, therapistPrice: 126 },
      { treatmentId: "tx_003", practitionerPrice: 350, therapistPrice: 245 },
      { treatmentId: "tx_004", practitionerPrice: 450, therapistPrice: 315 },
      { treatmentId: "tx_005", practitionerPrice: 80,  therapistPrice: 56  },
      { treatmentId: "tx_006", practitionerPrice: 300, therapistPrice: 210 },
      { treatmentId: "tx_007", practitionerPrice: 200, therapistPrice: 140 },
      { treatmentId: "tx_008", practitionerPrice: 400, therapistPrice: 280 }
    ]
  }
];

// Helper: given a practitionerPrice, returns the 70% therapistPrice
// (rounded to nearest whole number). Use this when adding new entries.
function calcTherapistPrice(practitionerPrice) {
  return Math.round(practitionerPrice * 0.7);
}

// Export for browser usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = { PRACTITIONERS, calcTherapistPrice };
}
