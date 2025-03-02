import type { RefTextElement, TextProps } from './types';
import type { RefType } from '@/types';

import { clsx } from 'clsx';

import { textStyle } from '@/components/typography/text/style.css';
import { BaseStyle } from '@/styles/css';
import { StyleSprinkles } from '@/styles/sprinkle';
import { extractSprinkleProps } from '@/utils';

const Text = (props: TextProps & RefType<RefTextElement>) => {
  const {
    as: Component = 'span',
    lineClamp,
    size = 'md',
    fontWeight = 'medium',
    ref,
    children,
  } = props;

  const lineClampStyle = lineClamp
    ? {
        WebkitLineClamp: Number(lineClamp),
        display: '-webkit-box' as const,
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical' as const,
      }
    : {};

  return (
    <Component
      ref={ref}
      className={clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        textStyle({
          size,
          fontWeight,
        }),
        props.className,
      ])}
      style={{
        ...props.style,
        ...lineClampStyle,
      }}
    >
      {children}
    </Component>
  );
};
export { Text };
