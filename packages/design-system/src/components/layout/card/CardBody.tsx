import { PropsWithChildren } from "react";
import { CardBodyProps } from "./types";
import { clsx } from "clsx";
import { BaseStyle } from "../../../styles/css";
import { StyleSprinkles } from "../../../styles/sprinkle";
import { extractSprinkleProps } from "../../../utils";

const CardBody: React.FC<PropsWithChildren<CardBodyProps>> = (props) => {
  const { as: Component = "div", children, className, ...rest } = props;
  return (
    <Component
      id="card-content"
      {...rest}
      className={clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties))
        ),
        props.className,
      ])}
      style={{
        ...rest.style,
        flex: 1,
      }}
      role="banner"
      aria-labelledby="card-title"
    >
      {children}
    </Component>
  );
};
export { CardBody };
