import type { StyleProps } from '@/types';
import type { HTMLAttributes, PropsWithChildren } from 'react';

export type HeadingProps = PropsWithChildren &
  StyleProps & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
    fontWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
  } & HTMLAttributes<HTMLHeadingElement>;
