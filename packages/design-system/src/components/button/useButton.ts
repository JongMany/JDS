import { BaseButtonProps, ButtonEventType } from "./types";

export const useButton = <T extends "a" | "button" | "div" | "input" | "span">(
  props: BaseButtonProps<T>
) => {
  const {
    elementType = "button",
    role = "button",
    type = "button",
    isDisabled = false,
    isLoading = false,
    tabIndex = 0,
    onKeyDown,
    ...rest
  } = props;

  const disabled = isDisabled || isLoading;

  const handleKeyDown = (e: ButtonEventType) => {
    onKeyDown?.(e);

    if (e.key === " " || e.key === "Spacebar" || e.key === "32") {
      if (disabled) return;
      if (e.defaultPrevented) return;
      if (elementType === "button") return;

      e.preventDefault();
      e.currentTarget.click();
      return;
    }

    if (e.key === "Enter" || e.key === "13") {
      if (disabled) return;
      if (e.defaultPrevented) return;
      if (elementType === "input" && type !== "button") return;

      e.preventDefault();
      e.currentTarget.click();
      return;
    }
  };

  const baseProps = {
    ...rest,
    "data-loading": isLoading,
    tabIndex: disabled ? undefined : (tabIndex ?? 0),
    onKeyDown: handleKeyDown,
  };

  let additionalProps = {};

  switch (elementType) {
    case "button": {
      additionalProps = {
        type: type ?? "button",
        disabled,
      };
      break;
    }
    case "a": {
      const { href, target, rel } = props as BaseButtonProps<"a">;

      additionalProps = {
        role: "button",
        href: disabled ? undefined : href,
        target: disabled ? undefined : target,
        rel: disabled ? undefined : rel,
        "area-disabled": isDisabled,
      };
      break;
    }
    case "input": {
      additionalProps = {
        role: "button",
        type: props.type,
        disabled,
        "area-disabled": undefined,
      };
      break;
    }
    default: {
      additionalProps = {
        role: "button",
        type: type ?? "button",
        "area-disabled": isDisabled,
      };
      break;
    }
  }

  const buttonProps = {
    ...baseProps,
    ...additionalProps,
  };

  return {
    buttonProps,
  };
};
