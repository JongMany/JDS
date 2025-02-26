// import {  } from "@repo/tokens";
import { fontSize, fontWeight, palette, radii } from "@repo/tokens";
import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const errorBorderColorVariant = createVar();
export const focusBorderColorVariant = createVar();
export const colorVariant = createVar();

const inputBaseStyle = style({
  border: "none",
  boxShadow: "none",
  borderRadius: "0",
  appearance: "none",
  // 리셋 스타일
  color: colorVariant,
  borderStyle: "solid",
  borderWidth: "2px",
  display: "flex",
  alignItems: "center",
  fontWeight: fontWeight[400],
  width: "100%",

  position: "relative",
  zIndex: 2,

  transition: "background-color 0.2s, color 0.2s, border-color 0.2s",
  selectors: {
    "&::placeholder": {
      color: palette.coolNeutral[30],
    },

    "&:focus-visible": {
      outline: "none",
      borderColor: focusBorderColorVariant,

      backgroundColor: "transparent",
    },

    "&[disabled]": {
      opacity: 0.4,
      cursor: "not-allowed",
    },

    "&[data-invalid='true']": {
      outline: "none",
      borderColor: errorBorderColorVariant,
    },
  },
});

export const inputStyle = recipe({
  base: inputBaseStyle,
  variants: {
    size: {
      lg: {
        borderRadius: radii.md,
        padding: "0 1rem",
        height: "3rem",
        fontSize: fontSize[18],
      },
      md: {
        borderRadius: radii.base,
        padding: "0 1rem",
        height: "2.5rem",
        fontSize: fontSize[16],
      },
      sm: {
        borderRadius: radii.base,
        padding: "0 0.75rem",
        height: "2rem",
        fontSize: fontSize[14],
      },
      xs: {
        borderRadius: radii.sm,
        padding: "0 0.5rem",
        height: "1.5rem",
        fontSize: fontSize[12],
      },
    },
    variant: {
      outline: {
        borderColor: palette.coolNeutral[30],
        backgroundColor: "transparent",
      },
      filled: {
        borderColor: "transparent",
        backgroundColor: palette.coolNeutral[50],
      },
    },
  },
});

export const inputGroupStyle = style({
  margin: 0,
  padding: 0,
  border: 0,

  display: "flex",
  position: "relative",
});

export const inputLeftAddonStyle = recipe({
  base: {
    margin: 0,
    border: 0,
    display: "flex",
    alignItems: "center",
    position: "relative",
    right: "-2px",
    zIndex: 1,

    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: palette.coolNeutral[60],
    borderRightColor: "transparent",
    backgroundColor: palette.coolNeutral[50],
  },
  variants: {
    size: {
      lg: {
        borderStartStartRadius: radii.md,
        borderEndStartRadius: radii.md,
        padding: "0 1rem",
        height: "3rem",
        fontSize: fontSize[18],
      },
      md: {
        borderStartStartRadius: radii.base,
        borderEndStartRadius: radii.base,
        padding: "0 1rem",
        height: "2.5rem",
        fontSize: fontSize[16],
      },
      sm: {
        borderStartStartRadius: radii.base,
        borderEndStartRadius: radii.base,
        padding: "0 0.75rem",
        height: "2rem",
        fontSize: fontSize[14],
      },
      xs: {
        borderStartStartRadius: radii.sm,
        borderEndStartRadius: radii.sm,
        padding: "0 0.5rem",
        height: "1.5rem",
        fontSize: fontSize[12],
      },
    },
  },
});
