// import {
//   createGlobalThemeContract,
//   createGlobalTheme,
// } from "@vanilla-extract/css";
// import { lightColors, darkColors, paletteColors } from "@repo/design-tokens";

// function generateContract<T extends object>(obj: T): T {
//   return Object.fromEntries(
//     Object.entries(obj).map(([key]) => [key, key])
//   ) as T;
// }

// const semanticContract = generateContract(lightColors);
// const paletteContract = generateContract(paletteColors);

// export const DARK_MODE_CLASS_NAME = "dark-mode";

// function prefix(value: string | null) {
//   return `WDS-${value}`;
// }

// export const semanticVars = createGlobalThemeContract(semanticContract, prefix);
// export const paletteVars = createGlobalThemeContract(paletteContract, prefix);

// createGlobalTheme("body", semanticVars, lightColors);
// createGlobalTheme(`body.${DARK_MODE_CLASS_NAME}`, semanticVars, darkColors);
// createGlobalTheme("body", paletteVars, paletteColors);

// export type SemanticColor = keyof typeof semanticVars;
// export type PaletteColor = keyof typeof paletteVars;
// export type Color = SemanticColor | PaletteColor;
