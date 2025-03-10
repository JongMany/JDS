import type { AsElementProps, StyleProps } from '@/types';
import type { CSSProperties } from '@vanilla-extract/css';

export type FlexProps = AsElementProps &
  StyleProps & {
    align?: CSSProperties['alignItems'];
    basis?: CSSProperties['flexBasis'];
    direction?: CSSProperties['flexDirection'];
    grow?: CSSProperties['flexGrow'];
    shrink?: CSSProperties['flexShrink'];
    wrap?: CSSProperties['flexWrap'];
    justify?: CSSProperties['justifyContent'];
    gap?: CSSProperties['gap'];
  };
