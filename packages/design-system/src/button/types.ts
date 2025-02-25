import { ComponentProps, HTMLAttributes, KeyboardEvent } from "react";
import { ColorProps, Size } from "../types";

export type ButtonProps = {
  color?: ColorProps["color"];
  isDisabled?: boolean;
  isLoading?: boolean;
  size?: Size;
  variant?: "solid" | "outline" | "ghost";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonElementType = "button" | "a" | "div" | "span" | "input";
export type ButtonEventType = KeyboardEvent<HTMLButtonElement> &
  KeyboardEvent<HTMLAnchorElement> &
  KeyboardEvent<HTMLDivElement> &
  KeyboardEvent<HTMLSpanElement> &
  KeyboardEvent<HTMLInputElement>;

export type BaseButtonProps<T extends ButtonElementType = "button"> = {
  elementType?: T;
  role?: string;
  type?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  isLoading?: boolean;
  tabIndex?: number;
} & ComponentProps<T>;

export type UseButtonReturn<T> = {
  buttonProps: HTMLAttributes<T> & {
    role?: string;
    type?: "button" | "submit" | "reset";
    tabIndex?: number;
    disabled?: boolean;
    "data-loading": boolean;
  };
};

export type OverloadedButtonFunction = {
  (props: BaseButtonProps<"button">): UseButtonReturn<HTMLButtonElement>;
  (props: BaseButtonProps<"a">): UseButtonReturn<HTMLAnchorElement>;
  (props: BaseButtonProps<"div">): UseButtonReturn<HTMLDivElement>;
  (props: BaseButtonProps<"span">): UseButtonReturn<HTMLSpanElement>;
  (props: BaseButtonProps<"input">): UseButtonReturn<HTMLInputElement>;
};
