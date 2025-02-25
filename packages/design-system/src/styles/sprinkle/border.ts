import { radii } from '@repo/tokens';
import { defineProperties } from '@vanilla-extract/sprinkles';

export const BorderStyleProperties = defineProperties({
  conditions: {
    default: {},
  },
  defaultCondition: 'default',
  properties: {
    borderRadius: radii,
  },
});
