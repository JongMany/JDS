import { recipe } from '@vanilla-extract/recipes';
import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { fontSize, fontWeight, radii, shadows, typography } from '@repo/tokens';

export const enableColorVariant = createVar(); // 500
export const hoverColorVariant = createVar(); // 600 outline 50 ghost 50
export const activeColorVariant = createVar(); // 700 outline 100 ghost 100

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
    variant: {
      solid: {
        backgroundColor: enableColorVariant,
        // color: vars.colors.$scale.gray[50],

        '&:hover:not([disabled])': {
          backgroundColor: hoverColorVariant,
        },
        '&:active:not([disabled])': {
          backgroundColor: activeColorVariant,
        },
      },
      outline: {
        border: `1px solid ${enableColorVariant}`,
        color: enableColorVariant,

        '&:hover:not([disabled])': {
          backgroundColor: hoverColorVariant,
        },
        '&:active:not([disabled])': {
          backgroundColor: activeColorVariant,
        },
      },
      ghost: {
        color: enableColorVariant,

        '&:hover:not([disabled])': {
          backgroundColor: hoverColorVariant,
        },
        '&:active:not([disabled])': {
          backgroundColor: activeColorVariant,
        },
      },
    },
  },
  // default variant 정의
  defaultVariants: {},
});
