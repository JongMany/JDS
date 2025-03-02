import clsx from 'clsx';
import { RefType } from '../../../types';
import { HeadingProps } from './types';
import { BaseStyle } from '../../../styles/css/base.css';
import { StyleSprinkles } from '../../../styles/sprinkle/index';
import { extractSprinkleProps } from '../../../utils';
import { headingStyle } from './style.css';

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
