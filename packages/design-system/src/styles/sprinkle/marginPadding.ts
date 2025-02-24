import { defineProperties } from "@vanilla-extract/sprinkles";

export const MarginAndPaddingProperties = defineProperties({
  conditions: {
    default: {},
  },
  defaultCondition: "default",
  properties: {
    // marginTop: box.spacing,
    // marginRight: box.spacing,
    // marginBottom: box.spacing,
    // marginLeft: box.spacing,
    // paddingTop: box.spacing,
    // paddingRight: box.spacing,
    // paddingBottom: box.spacing,
    // paddingLeft: box.spacing,
  },
  shorthands: {
    margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
    padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
  },
});
