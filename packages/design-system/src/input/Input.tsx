import React from "react";
import { clsx } from "clsx";
import type { InputProps } from "./types";
import { useInput } from "./useInput";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const Input = (props: InputProps & { ref: React.Ref<HTMLInputElement> }) => {
  const {
    color = "gray",
    size = "lg",
    // variant = "outline",
    errorBorderColor = "#E53E3E",
    focusBorderColor = "#3182CE",
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
      // className={clsx([inputStyle({}), className])}
      style={{
        ...assignInlineVars({}),
      }}
    />
  );
};

export { Input };
