import type { NumberSize, StyleProps } from '@/types';
import type { CSSProperties, HTMLAttributes } from 'react';

export type ImageProps = HTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  fallbackSrc?: string;
  boxSize?: NumberSize;
  borderRadius?: 'full' | NumberSize;
  width?: NumberSize;
  height?: NumberSize;
  fit?: CSSProperties['objectFit'];
  aspectRatio?: number;
  quality?: number;
  srcSetWidths?: number[];
  format: 'jpg' | 'jpeg' | 'png' | 'gif' | 'webp';
};
