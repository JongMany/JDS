import React from "react";
import { RefType } from "../../../types";
import type { CardProps } from "./types";
import { clsx } from "clsx";
import { BaseStyle } from "../../../styles/css";
import { StyleSprinkles } from "../../../styles/sprinkle";
import { extractSprinkleProps } from "../../../utils";
import { CardHeader } from "./CardHeader";
import { CardBody } from "./CardBody";
import { CardFooter } from "./CardFooter";

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

  const ALLOWED_CHILDREN = [CardHeader, CardBody, CardFooter];
  // Card.Header, Card.Body, Card.Footer만 허용하도록 PropTypes 검사
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      const isAllowed = ALLOWED_CHILDREN.includes(child.type as any);
      if (!isAllowed) {
        throw new Error(
          "🚨 Card 컴포넌트의 직속 자식은 `CardHeader, CardBody, CardFooter`만 허용됩니다."
        );
      }
    }
  });

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
