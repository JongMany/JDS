import type { HeadingProps } from './types';
import type { RefType } from '@/types';

import clsx from 'clsx';

import { headingStyle } from './style.css';

import { BaseStyle } from '@/styles/css';
import { StyleSprinkles } from '@/styles/sprinkle';
import { extractSprinkleProps } from '@/utils';

const Heading = (props: HeadingProps & RefType<HTMLHeadingElement>) => {
  const {
    as: Component = 'h1',
    size = 'md',
    fontWeight = 'medium',
    ref,
    children,
  } = props;

  return (
    <Component
      ref={ref}
      className={clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        headingStyle({
          fontWeight,
          size,
        }),
        props.className,
      ])}
    >
      {children}
    </Component>
  );
};

export { Heading };
