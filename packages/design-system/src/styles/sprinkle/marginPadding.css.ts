import { spacing } from '@repo/tokens';
import { defineProperties } from '@vanilla-extract/sprinkles';

export const MarginAndPaddingProperties = defineProperties({
  conditions: {
    default: {},
  },
  defaultCondition: 'default',
  properties: {
    marginTop: spacing,
    marginRight: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    paddingTop: spacing,
    paddingRight: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
  },
  shorthands: {
    margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
    padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
});
