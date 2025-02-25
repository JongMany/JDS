import { ColorProps, Size } from '../types';

export type ButtonProps = {
  color?: ColorProps['color'];
  isDisabled?: boolean;
  isLoading?: boolean;
  size?: Size;
  variant?: 'solid' | 'outline' | 'ghost';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
