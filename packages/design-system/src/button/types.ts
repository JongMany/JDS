import { Size } from '../types';

export type ButtonProps = {
  // color?: keyof typeof vars.colors.$scale,
  isDisabled?: boolean;
  isLoading?: boolean;
  size?: Size;
  variant?: 'solid' | 'outline' | 'ghost';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
