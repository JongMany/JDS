import React from "react";
import { RefType } from "../../../types";
import { clsx } from "clsx";
import { BaseStyle } from "../../../styles/css";
import { StyleSprinkles } from "../../../styles/sprinkle";
import { extractSprinkleProps } from "../../../utils";
import { FlexProps } from "./types";

const Flex: React.FC<FlexProps & RefType<HTMLElement>> = (props) => {
  const { as = "div", children } = props;
  // Flex properties
  const { align, basis, direction, grow, justify, shrink, wrap, gap } = props;

  return React.createElement(
    as,
    {
      ...props,
      className: clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties))
        ),
        props.className,
      ]),
      style: {
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
        flexWrap: wrap,
        gap: gap,
        ...props.style,
      },
    },
    children
  );
};

export { Flex };
