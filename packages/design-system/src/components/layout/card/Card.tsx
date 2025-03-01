import React from "react";
import { RefType } from "../../../types";
import type { CardProps } from "./types";
import { clsx } from "clsx";
import { BaseStyle } from "../../../styles/css";
import { StyleSprinkles } from "../../../styles/sprinkle";
import { extractSprinkleProps } from "../../../utils";

const Card: React.FC<CardProps & RefType<HTMLElement>> = (props) => {
  const {
    as = "article",
    children,
    className,
    minW,
    minH,
    maxW,
    maxH,
    ref,
    ...rest
  } = props;

  const dynamicStyle = {
    ...(props.style ?? {}), // 기존 스타일 유지
    ...(minW ? { minWidth: minW } : {}),
    ...(minH ? { minHeight: minH } : {}),
    ...(maxW ? { maxWidth: maxW } : {}),
    ...(maxH ? { maxHeight: maxH } : {}),
  };

  return React.createElement(
    as,
    {
      className: clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties))
        ),
        props.className,
      ]),
      ...rest,
      style: dynamicStyle,
      ref,
    },
    children
  );
};

export { Card };
