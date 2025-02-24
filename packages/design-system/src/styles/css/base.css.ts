import { style } from "@vanilla-extract/css";

export const BaseStyle = style({
  padding: 0,
  margin: 0,
  selectors: {
    // tab 등으로 포커스를 줄 때
    "&:focus-visible": {
      outline: "none",
      // boxShadow: vars.box.shadows.outline,
    },
  },
});
