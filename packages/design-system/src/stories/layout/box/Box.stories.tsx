import { Meta, StoryObj } from "@storybook/react";
import { Box } from "../../../components/layout/box/Box";
import { BoxProps } from "../../../components/layout/box/types";
import { RefType } from "../../../types";

const meta: Meta<BoxProps & RefType<HTMLElement>> = {
  title: "Layout/Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    ref: {
      table: {
        disable: true, // ✅ Controls 패널에서 숨김
      },
    },
    as: {
      options: ["div", "span", "section", "article", "footer", "nav", "header"],
      control: "select",
      description: "HTML 태그를 변경합니다.",
      defaultValue: "div",
    },
    className: {
      control: { type: "text" },
      description: "추가적인 클래스를 적용할 수 있습니다.",
    },
    style: {
      control: { type: "object" },
      description: "인라인 스타일을 적용할 수 있습니다.",
    },
    children: {
      control: { type: "text" },
      description: "컴포넌트 내부에 렌더링할 내용을 설정합니다.",
    },
  },
};
export default meta;

type Story = StoryObj<BoxProps>;

export const Default: Story = {
  args: {
    children: "Hello, Box!",
  },
};
