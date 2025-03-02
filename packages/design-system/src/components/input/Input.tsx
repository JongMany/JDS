import type { InputProps } from './types';
import type { RefType } from '@/types';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { clsx } from 'clsx';

import {
  errorBorderColorVariant,
  focusBorderColorVariant,
  inputStyle,
} from './style.css';
import { useInput } from './useInput';

const Input = (props: InputProps & RefType<HTMLInputElement>) => {
  const {
    color = 'gray',
    size = 'lg',
    // variant = "outline",
    errorBorderColor = '#E53E3E',
    focusBorderColor = '#3182CE',
    className,
    style,
    ref,
    ...rest
  } = props;

  const { inputProps } = useInput(rest);

  return (
    <input
      {...inputProps}
      ref={ref}
      className={clsx([
        inputStyle({
          size,
        }),
        className,
      ])}
      style={{
        ...assignInlineVars({
          [errorBorderColorVariant]: errorBorderColor,
          [focusBorderColorVariant]: focusBorderColor,
        }),
      }}
    />
  );
};

export { Input };
