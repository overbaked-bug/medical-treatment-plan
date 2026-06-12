// catalog.js
// Master treatment catalog. Edit this file to add/update treatments.
// basePrice is used as a fallback if no practitioner-specific price is set.

const TREATMENT_CATALOG = [
  {
    id: "tx_001",
    name: "Microneedling",
    category: "Skin Rejuvenation",
    proofPoints: [
      "Stimulates natural collagen production",
      "Improves skin texture and tone",
      "Reduces appearance of fine lines and acne scars"
    ],
    painLevel: 3, // 1 (none) - 5 (high)
    downtime: "1-2 days of redness",
    duration: "45 min",
    basePrice: 250
  },
  {
    id: "tx_002",
    name: "Chemical Peel (Medium Depth)",
    category: "Skin Rejuvenation",
    proofPoints: [
      "Exfoliates damaged outer skin layers",
      "Improves pigmentation and sun damage",
      "Smooths rough texture"
    ],
    painLevel: 2,
    downtime: "3-5 days peeling/redness",
    duration: "30 min",
    basePrice: 180
  },
  {
    id: "tx_003",
    name: "Botulinum Toxin (Botox) - Upper Face",
    category: "Injectables",
    proofPoints: [
      "Relaxes muscles to reduce dynamic wrinkles",
      "Targets forehead, frown lines, crow's feet",
      "Results visible within 3-7 days"
    ],
    painLevel: 2,
    downtime: "Minimal - possible mild bruising",
    duration: "20 min",
    basePrice: 350
  },
  {
    id: "tx_004",
    name: "Dermal Filler - Lips",
    category: "Injectables",
    proofPoints: [
      "Adds volume and definition to lips",
      "Hyaluronic acid based, reversible",
      "Immediate visible results"
    ],
    painLevel: 3,
    downtime: "1-3 days swelling",
    duration: "30 min",
    basePrice: 450
  },
  {
    id: "tx_005",
    name: "Laser Hair Removal (Small Area)",
    category: "Laser",
    proofPoints: [
      "Permanently reduces hair growth over multiple sessions",
      "Suitable for underarms, upper lip, bikini line",
      "Quick treatment time"
    ],
    painLevel: 2,
    downtime: "None",
    duration: "15 min",
    basePrice: 80
  },
  {
    id: "tx_006",
    name: "RF Skin Tightening",
    category: "Body Contouring",
    proofPoints: [
      "Stimulates collagen via radiofrequency heat",
      "Tightens loose or sagging skin",
      "Non-invasive, no downtime required"
    ],
    painLevel: 1,
    downtime: "None",
    duration: "45 min",
    basePrice: 300
  },
  {
    id: "tx_007",
    name: "HydraFacial",
    category: "Skin Rejuvenation",
    proofPoints: [
      "Cleanses, exfoliates and hydrates in one session",
      "Suitable for all skin types",
      "Immediate glow with zero downtime"
    ],
    painLevel: 1,
    downtime: "None",
    duration: "30 min",
    basePrice: 200
  },
  {
    id: "tx_008",
    name: "PRP (Platelet-Rich Plasma) Facial",
    category: "Regenerative",
    proofPoints: [
      "Uses patient's own blood plasma to stimulate healing",
      "Improves skin texture, tone, and hair growth",
      "Natural, low allergy risk"
    ],
    painLevel: 3,
    downtime: "1-2 days redness/swelling",
    duration: "60 min",
    basePrice: 400
  }
];

// Export for browser usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = TREATMENT_CATALOG;
}
