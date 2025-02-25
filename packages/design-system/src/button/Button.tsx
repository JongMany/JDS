import React from 'react';
import { ButtonProps } from './types';
import { clsx } from 'clsx';
import {
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
} from './style.css';
import { palette } from '@repo/tokens';
import { assignInlineVars } from '@vanilla-extract/dynamic';

// export default function Button(
//   props: ButtonProps,
//   ref: React.Ref<HTMLButtonElement>,
// ) {
//   return <button></button>;
// }
// const _Button = React.forwardRef(Button);
// export { _Button as Button };
export function Button({
  size,
  color = 'blue',
  variant = 'solid',
  children,
  ref,
}: ButtonProps & { ref?: React.Ref<HTMLButtonElement> }) {
  const keys = Object.keys(palette[color]);

  const enableColor = palette.blue[50];
  const hoverColor = palette.blue[70];

  // const hoverColor =
  //   variant === 'solid' ? palette[color][600] : palette[color][50];
  // const activeColor =
  //   variant === 'solid' ? palette[color][700] : palette[color][100];

  return (
    <button
      className={clsx([buttonStyle({ size, variant })])}
      ref={ref}
      style={{
        ...assignInlineVars({
          [enableColorVariant]: enableColor,
          [hoverColorVariant]: hoverColor,
          // [activeColorVariant]: activeColor,
        }),
      }}
    >
      <span>{children}</span>
    </button>
  );
}
