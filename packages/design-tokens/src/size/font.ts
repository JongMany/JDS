const fontSize = {
  56: "56px",
  40: "40px",
  36: "36px",
  28: "28px",
  24: "24px",
  22: "22px",
  20: "20px",
  18: "18px",
  17: "17px",
  16: "16px",
  15: "15px",
  14: "14px",
  13: "13px",
  12: "12px",
  11: "11px",
} as const;

// 자간
const letterSpacing = {
  "fs-14": "0.0311em",
  "fs-16": "0.0252em",
  "fs-18": "0.0194em",
  "fs-20": "0.0145em",
  "fs-22": "0.0096em",
  "fs-24": "0.0em",
  "fs-26": "-0.002em",
  "fs-28": "-0.012em",
  "fs-30": "-0.0194em",
  "fs-32": "-0.023em",
  "fs-38": "-0.0236em",
  "fs-48": "-0.027em",
  "fs-52": "-0.0282em",
  "fs-72": "-0.0319em",
} as const;

// 행간
const lineHeight = {
  "fs-14": 1.273,
  "fs-16": 1.334,
  "fs-18": 1.385,
  "fs-20": 1.429,
  "fs-22": 1.467,
  "fs-24": 1.412,
  "fs-26": 1.445,
  "fs-28": 1.4,
  "fs-30": 1.364,
  "fs-32": 1.334,
  "fs-38": 1.358,
  "fs-48": 1.334,
  "fs-52": 1.3,
  "fs-72": 1.286,
} as const;

export { fontSize, letterSpacing, lineHeight };
