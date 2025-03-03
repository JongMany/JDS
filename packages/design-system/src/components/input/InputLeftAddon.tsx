import { inputLeftAddonStyle } from "./style.css";
import { InputLeftAddonProps } from "./types";
import { clsx } from "clsx";

const InputLeftAddon = (props: InputLeftAddonProps) => {
  const { size = "md", children } = props;

  return (
    <div
      className={clsx([
        inputLeftAddonStyle({
          size,
        }),
      ])}
    >
      {children}
    </div>
  );
};

InputLeftAddon.displayName = "InputLeftAddon";
export { InputLeftAddon };
