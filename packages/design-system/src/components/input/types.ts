import type { ComponentPropsWithoutRef } from 'react';

type Size = 'lg' | 'md' | 'sm' | 'xs';

export type InputProps = {
  // color
  errorBorderColor?: string;
  focusBorderColor?: string;
  size?: Size;
} & UseInputProps;

export type UseInputProps = {
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  formAction?: string | undefined;
} & Omit<
  ComponentPropsWithoutRef<'input'>,
  'disabled' | 'readOnly' | 'formAction' | 'children' | 'size'
>;

export type UseInputResult = {
  inputProps: Omit<ComponentPropsWithoutRef<'input'>, 'children'> & {
    'data-disabled': boolean;
    'data-invalid': boolean;
    'aria-invalid': boolean;
    'aria-required': boolean;
    formAction?: string | undefined;
  };
  valueCount: number;
};
