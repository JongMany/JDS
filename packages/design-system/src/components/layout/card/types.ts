import type { AsElementProps, StyleProps } from "../../../types";

export type CardProps = AsElementProps &
  StyleProps & {
    minW?: `${number}${"px" | "rem" | "em"}`;
    maxW?: `${number}${"px" | "rem" | "em"}`;
    minH?: `${number}${"px" | "rem" | "em"}`;
    maxH?: `${number}${"px" | "rem" | "em"}`;
  };
