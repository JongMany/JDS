import { createSprinkles } from "@vanilla-extract/sprinkles";
import { MarginAndPaddingProperties } from "./marginPadding";
import { BorderStyleProperties } from "./border";
import { BoxShadowStyleProps } from "./boxShadow";

export const StyleSprinkles = createSprinkles(
  MarginAndPaddingProperties,
  BorderStyleProperties,
  BoxShadowStyleProps
);
