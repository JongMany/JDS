import { shadows } from '@repo/tokens';
import { defineProperties } from '@vanilla-extract/sprinkles';

export const BoxShadowStyleProperties = defineProperties({
  conditions: {
    default: {},
  },
  defaultCondition: 'default',
  properties: {
    boxShadow: shadows,
  },
});
