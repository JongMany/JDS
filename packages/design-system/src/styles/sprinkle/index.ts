import { createSprinkles } from '@vanilla-extract/sprinkles';

import { BorderStyleProperties } from './border.css';
import { BoxShadowStyleProperties } from './boxShadow.css';
import { MarginAndPaddingProperties } from './marginPadding.css';

export const StyleSprinkles = createSprinkles(
  MarginAndPaddingProperties,
  BorderStyleProperties,
  BoxShadowStyleProperties,
);
