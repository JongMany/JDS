import React from 'react';
import { ButtonProps } from './types';
import { clsx } from 'clsx';
import { buttonStyle } from './style.css';

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
  children,
  ref,
}: ButtonProps & { ref?: React.Ref<HTMLButtonElement> }) {
  return (
    <button className={clsx([buttonStyle({ size })])}>
      <span>{children}</span>
    </button>
  );
}
