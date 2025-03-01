import { HTMLAttributes } from "react";
import type { AsElementProps, StyleProps } from "../../../types";

export type CardProps = AsElementProps &
  StyleProps & {
    minW?: `${number}${"px" | "rem" | "em"}`;
    maxW?: `${number}${"px" | "rem" | "em"}`;
    minH?: `${number}${"px" | "rem" | "em"}`;
    maxH?: `${number}${"px" | "rem" | "em"}`;
  };
export type CardHeaderProps = StyleProps & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & HTMLAttributes<HTMLElement>;

export type CardFooterProps = StyleProps & {
  as?: "div" | "footer";
} & HTMLAttributes<HTMLElement>;
