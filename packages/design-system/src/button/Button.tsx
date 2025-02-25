import React from 'react';
import { ButtonProps } from './types';
import { clsx } from 'clsx';
import {
  activeColorVariant,
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
  const middlePoint = keys[Math.floor(keys.length * 0.5)] as any;
  const sixPoint = keys[Math.floor(keys.length * 0.6)] as any;
  const sevenPoint = keys[Math.floor(keys.length * 0.7)] as any;

  const enableColor = (palette[color] as any)[middlePoint];
  const hoverColor = (palette[color] as any)[sixPoint];
  const activeColor = (palette[color] as any)[sevenPoint];
  console.log(
    enableColor,
    hoverColor,
    activeColor,
    middlePoint,
    sixPoint,
    sevenPoint,
  );

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
          [activeColorVariant]: activeColor,
        }),
      }}
    >
      <span>{children}</span>
    </button>
  );
}
