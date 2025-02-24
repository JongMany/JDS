import { recipe } from '@vanilla-extract/recipes';
import { globalStyle, style } from '@vanilla-extract/css';
import { fontSize, fontWeight, radii, shadows, typography } from '@repo/tokens';

const baseButtonStyle = style({
  margin: 0,
  padding: 0,
  border: 0,
  background: 'none',
  borderRadius: radii.md,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',

  // Selector
  selectors: {
    '&[disabled]': {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    // '&[data-loading="true"]': {
    //   '& span': {
    //     opacity: 0,
    //   },
    // },
    // '&[data-loading="true"] &span': {
    //   opacity: 0,
    // },
    // 접근성을 위한 대응(tab으로 선택)
    '&:focus-visible': {
      outline: 'none',

      boxShadow: shadows.outline,
    },
  },
});

globalStyle(`${baseButtonStyle}[data-loading="true"] span`, {
  opacity: 0,
});

export const buttonStyle = recipe({
  // 기본 베이스
  base: baseButtonStyle,

  // variant 정의
  variants: {
    size: {
      xs: {
        fontSize: fontSize[12],
        fontWeight: fontWeight[600],
        padding: '0 0.5rem',
        gap: '0.5rem',
        height: '1.5rem',
      },
      sm: {
        fontSize: fontSize[14],
        fontWeight: fontWeight[600],
        padding: '0 0.75rem',
        gap: '0.5rem ',
        height: '2rem',
      },
      md: {
        fontSize: fontSize[16],
        fontWeight: fontWeight[600],
        padding: '0 1rem',
        gap: '0.5rem',
        height: '2.5rem',
      },
      lg: {
        fontSize: fontSize[18],
        padding: '0 1.5rem',
        gap: '0.5rem',
        height: '3rem',
      },
    },
    variant: {},
  },
  // default variant 정의
  defaultVariants: {},
});
