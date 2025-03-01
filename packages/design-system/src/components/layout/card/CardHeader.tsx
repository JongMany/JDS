import { PropsWithChildren } from "react";
import { CardHeaderProps } from "./types";
import { clsx } from "clsx";
import { BaseStyle } from "../../../styles/css";
import { StyleSprinkles } from "../../../styles/sprinkle";
import { extractSprinkleProps } from "../../../utils";

const CardHeader: React.FC<PropsWithChildren<CardHeaderProps>> = (props) => {
  const { as: Component = "h3", children, ...rest } = props;
  return (
    <Component
      {...rest}
      className={clsx([
        BaseStyle,
        StyleSprinkles(
          extractSprinkleProps(props, Array.from(StyleSprinkles.properties))
        ),
        props.className,
      ])}
    >
      {children}
    </Component>
  );
};

export { CardHeader };
