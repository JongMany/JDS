import { typography, palette } from "../src/index";
import fs from "fs";
import path from "path";

import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = path.resolve(__dirname, "../dist");

// 🔹 dist 폴더가 없으면 생성
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

let cssContent = `:root {\n`;

// 객체를 순회하며 CSS 변수 생성
Object.entries(typography).forEach(([key, styles]) => {
  cssContent += `  --${key}-font-size: ${styles.fontSize};\n`;
  cssContent += `  --${key}-line-height: ${styles.lineHeight};\n`;
  cssContent += `  --${key}-letter-spacing: ${styles.letterSpacing};\n`;
});

// 🔹 palette 객체를 순회하며 CSS 변수 생성
Object.entries(palette).forEach(([category, values]) => {
  Object.entries(values as Record<string, string | number>).forEach(
    ([key, value]) => {
      cssContent += `  --color-${category}-${key}: ${value};\n`;
    }
  );
});

cssContent += `}\n\n`;

// 클래스 스타일 정의
Object.entries(typography).forEach(([key, styles]) => {
  cssContent += `.${key} {\n`;
  cssContent += `  font-size: var(--${key}-font-size);\n`;
  cssContent += `  line-height: var(--${key}-line-height);\n`;
  cssContent += `  letter-spacing: var(--${key}-letter-spacing);\n`;
  cssContent += `}\n\n`;
});

// 결과를 `dist/typography.css` 파일로 저장
fs.writeFileSync(path.resolve(__dirname, "../dist/index.css"), cssContent);

console.log("Typography CSS generated successfully!");
