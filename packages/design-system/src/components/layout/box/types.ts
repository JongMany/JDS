import { CSSProperties } from "@vanilla-extract/css";
import { AsElementProps, StyleProps } from "../../../types";

export type BoxProps = AsElementProps & StyleProps;

export type FlexProps = BoxProps & {
  align?: CSSProperties["alignItems"];
  basis?: CSSProperties["flexBasis"];
  direction?: CSSProperties["flexDirection"];
  grow?: CSSProperties["flexGrow"];
  shrink?: CSSProperties["flexShrink"];
  wrap?: CSSProperties["flexWrap"];
  justify?: CSSProperties["justifyContent"];
  gap?: CSSProperties["gap"];
};
