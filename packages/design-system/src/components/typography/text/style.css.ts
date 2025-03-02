import { fontSize, fontWeight } from '@repo/tokens';
import { recipe } from '@vanilla-extract/recipes';

export const textStyle = recipe({
  variants: {
    size: {
      sm: {
        fontSize: fontSize[14],
      },
      md: {
        fontSize: fontSize[16],
      },
      lg: {
        fontSize: fontSize[18],
      },
      xl: {
        fontSize: fontSize[20],
      },
      '2xl': {
        fontSize: fontSize[24],
      },
      '3xl': {
        fontSize: fontSize[28],
      },
      '4xl': {
        fontSize: fontSize[36],
      },
      '5xl': {
        fontSize: fontSize[40],
      },
      '6xl': {
        fontSize: fontSize[56],
      },
    },
    fontWeight: {
      normal: { fontWeight: fontWeight[200] },
      medium: { fontWeight: fontWeight[400] },
      semibold: { fontWeight: fontWeight[600] },
      bold: { fontWeight: fontWeight[800] },
    },
  },
  defaultVariants: {
    size: 'md',
    fontWeight: 'medium',
  },
});
