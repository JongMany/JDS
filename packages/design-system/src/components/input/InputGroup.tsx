import type { RefType } from "@/types";
import type { InputGroupProps } from "./types";
import { Children, cloneElement, isValidElement } from "react";
import { clsx } from "clsx";
import { inputGroupStyle } from "./style.css";

const InputGroup = (props: InputGroupProps & RefType<HTMLDivElement>) => {
  const { children, className, size = "md", color, ref, ...rest } = props;
  const childrenWithProps = Children.toArray(children);

  const inputStyle: React.CSSProperties = {};

  childrenWithProps.forEach((child) => {
    if (
      typeof child === "object" &&
      "type" in child &&
      typeof child.type !== "string"
    ) {
      if (
        "displayName" in child.type &&
        child.type.displayName === "InputLeftAddon"
      ) {
        inputStyle.borderStartStartRadius = 0;
        inputStyle.borderEndStartRadius = 0;
      }
    }
  });

  const inputGroupChildren = childrenWithProps.map((child) => {
    if (isValidElement(child)) {
      // AddonLeft이 들어오면 Input 의 왼쪽 상단, 왼쪽 하단의 BorderRadius를 0으로 만들어준다.
      if (
        typeof child === "object" &&
        "type" in child &&
        typeof child.type !== "string" &&
        "displayName" in child.type
      ) {
        if (child.type.displayName === "Input") {
          return cloneElement(child, {
            ...(child.props as any),
            color,
            size,
            style: {
              ...(child.props as any).style,
              ...inputStyle,
            },
          });
        }
      }
      return cloneElement(child, { ...(child.props as any), color, size });
    }

    return null;
  });
  return (
    <div {...rest} ref={ref} className={clsx([inputGroupStyle, className])}>
      {inputGroupChildren}
    </div>
  );
};

export { InputGroup };
