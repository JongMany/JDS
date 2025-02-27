import { palette } from "@repo/tokens";
import { JSX } from "react";
import { StyleSprinkles } from "../styles/sprinkle";

type AsProps = {
  // svg를 제외한 HTML 태그
  as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>;
};

// as props는 제거한 HTML 속성
type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, "as">;

export type AsElementProps = AsProps & ElementProps;

export type ColorProps = {
  color?: keyof typeof palette;
  background?: keyof typeof palette;
};

// export type StyleProps = Parameters<typeof StyleSprinkles>[0] & ColorProps;
export type StyleProps = Parameters<typeof StyleSprinkles>[0];
