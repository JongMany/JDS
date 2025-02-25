import { fontSize } from "@repo/tokens";
import { keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const spinKeyframes = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const spinnerStyle = recipe({
  base: {
    position: "absolute",
    animation: `${spinKeyframes} 0.45s linear infinite`,
    display: "inline-block",
    borderTop: "2px solid currentcolor",
    borderRight: "2px solid currentcolor",
    borderBottom: "2px solid transparent",
    borderLeft: "2px solid transparent",
    borderRadius: "50%",
  },
  variants: {
    size: {
      xs: {
        width: fontSize[12],
        height: fontSize[12],
        left: `calc(50% - ${fontSize[12]}/2)`,
      },
      sm: {
        width: fontSize[14],
        height: fontSize[14],
        left: `calc(50% - ${fontSize[14]}/2)`,
      },
      md: {
        width: fontSize[16],
        height: fontSize[16],
        left: `calc(50% - ${fontSize[16]}/2)`,
      },
      lg: {
        width: fontSize[18],
        height: fontSize[18],
        left: `calc(50% - ${fontSize[18]}/2)`,
      },
    },
  },
});
