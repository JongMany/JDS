import type { StyleProps } from '@/types';
import type { HTMLAttributes, PropsWithChildren } from 'react';

export type HTMLTextElement =
  | HTMLParagraphElement
  | HTMLSpanElement
  | HTMLEmbedElement
  | HTMLImageElement;

export type RefTextElement = HTMLParagraphElement &
  HTMLSpanElement &
  HTMLEmbedElement &
  HTMLImageElement;

export type TextProps = PropsWithChildren &
  StyleProps & {
    as?: 'p' | 'span' | 'em' | 'i' | 'strong';
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
    fontWeight?: 'normal' | 'medium' | 'semibold' | 'bold';
    lineClamp: `${number}`;
  } & HTMLAttributes<HTMLTextElement>;
