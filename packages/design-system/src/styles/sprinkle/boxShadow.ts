import { shadows } from '@repo/tokens';
import { defineProperties } from '@vanilla-extract/sprinkles';

export const BoxShadowStyleProps = defineProperties({
  conditions: {
    default: {},
  },
  defaultCondition: 'default',
  properties: {
    boxShadow: shadows,
  },
});
