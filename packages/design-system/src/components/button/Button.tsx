import React from "react";
import { ButtonProps } from "./types";
import { clsx } from "clsx";
import {
  activeColorVariant,
  buttonStyle,
  enableColorVariant,
  hoverColorVariant,
  spanStyle,
} from "./style.css";
import { palette } from "@repo/tokens";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useButton } from "./useButton";
import { spinnerStyle } from "../../styles/recipe";

export function Button(
  props: ButtonProps & { ref?: React.Ref<HTMLButtonElement> }
) {
  const {
    size,
    color = "blue",
    variant = "solid",
    children,
    ref,
    leftIcon,
    rightIcon,
    isLoading,
    style,
  } = props;
  const { buttonProps } = useButton<"button">({
    ...props,
    elementType: "button",
  });

  const keys = Object.keys(palette[color]);
  const middlePoint = keys[Math.floor(keys.length * 0.5)] as any;
  const sixPoint = keys[Math.floor(keys.length * 0.6)] as any;
  const sevenPoint = keys[Math.floor(keys.length * 0.7)] as any;

  const enableColor = (palette[color] as any)[middlePoint];
  const hoverColor = (palette[color] as any)[sixPoint];
  const activeColor = (palette[color] as any)[sevenPoint];

  return (
    <button
      {...buttonProps}
      role="button"
      className={clsx([buttonStyle({ size, variant })])}
      ref={ref}
      style={{
        ...assignInlineVars({
          [enableColorVariant]: enableColor,
          [hoverColorVariant]: hoverColor,
          [activeColorVariant]: activeColor,
        }),
        ...style,
        position: "relative",
      }}
    >
      {isLoading && <div className={spinnerStyle({ size })}></div>}
      {leftIcon && <span className={spanStyle({ size })}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={spanStyle({ size })}>{rightIcon}</span>}
    </button>
  );
}
