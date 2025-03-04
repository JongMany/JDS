import { RefType } from "@/types";
import { ButtonProps } from "./types";
import { Button } from "./Button";
import React from "react";

type OmittedProps =
  | "leftIcon"
  | "rightIcon"
  | "loadingText"
  | "iconSpacing"
  | "spinnerPlacement";

interface BaseButtonProps extends Omit<ButtonProps, OmittedProps> {}

export interface IconButtonProps extends BaseButtonProps {
  /**
   * The icon to be used in the button.
   * @type React.ReactElement
   */
  icon?: React.ReactElement;
  /**
   * If `true`, the button will be perfectly round. Else, it'll be slightly round
   *
   * @default false
   */
  isRound?: boolean;
  /**
   * A11y: A label that describes the button
   */
  "aria-label": string;
}
const IconButton = (props: IconButtonProps & RefType<HTMLButtonElement>) => {
  const {
    icon,
    isRound,
    "aria-label": ariaLabel,
    children,
    ref,
    ...rest
  } = props;

  const element = icon || children;

  const _children = React.isValidElement<{
    "aria-hidden"?: boolean;
    focusable?: boolean;
  }>(element)
    ? React.cloneElement(element, {
        "aria-hidden": true,
        focusable: false,
      })
    : null;
  return (
    <Button
      paddingX={0}
      paddingY={0}
      borderRadius={isRound ? "full" : undefined}
      ref={ref}
      aria-label={ariaLabel}
      {...rest}
    >
      {_children}
    </Button>
  );
};

IconButton.displayName = "IconButton";
export { IconButton };
