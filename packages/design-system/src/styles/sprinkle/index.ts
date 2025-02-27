import { createSprinkles } from "@vanilla-extract/sprinkles";
import { MarginAndPaddingProperties } from "./marginPadding.css";
import { BorderStyleProperties } from "./border.css";
import { BoxShadowStyleProperties } from "./boxShadow.css";

export const StyleSprinkles = createSprinkles(
  MarginAndPaddingProperties,
  BorderStyleProperties,
  BoxShadowStyleProperties
);
