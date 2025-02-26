import React from "react";
import { RefType } from "../../../types";
import { BoxProps } from "./types";
import { clsx } from "clsx";
import { BaseStyle } from "../../../styles/css/base.css";
import { StyleSprinkles } from "../../../styles/sprinkle";
import { extractSprinkleProps } from "../../../utils";

const Box: React.FC<BoxProps & RefType<HTMLElement>> = (props) => {
  const { as = "div", color, children, className, ...rest } = props;

  return React.createElement(
    as,
    {
      ...rest,
      className: clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties))
        ),
        props.className,
      ]),
      style: {
        ...props.style,
      },
      // style: {
      //   // background: background && vars.colors.$scale?.[background]?.[100],
      //   // color: color && vars.colors.$scale?.[color]?.[700],
      //   ...props.style,
      // },
    },
    children
  );
};

export { Box };
