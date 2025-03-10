import type { CardFooterProps } from './types';
import type { PropsWithChildren } from 'react';

import clsx from 'clsx';

import { BaseStyle } from '@/styles/css';
import { StyleSprinkles } from '@/styles/sprinkle';
import { extractSprinkleProps } from '@/utils';

const CardFooter: React.FC<PropsWithChildren<CardFooterProps>> = (props) => {
  const { as: Component = 'footer', children, ...rest } = props;
  return (
    <Component
      {...rest}
      className={clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties)),
        ),
        props.className,
      ])}
      role="contentinfo"
      aria-labelledby="footer-title"
    >
      {children}
    </Component>
  );
};

export { CardFooter };
