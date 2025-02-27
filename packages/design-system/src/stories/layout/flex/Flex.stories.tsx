import React from "react";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Flex, FlexProps } from "../../../components/layout";

export default {
  title: "Layout/Flex",
  component: Flex,
  argTypes: {
    align: {
      control: "select",
      options: ["flex-start", "flex-end", "center", "baseline", "stretch"],
    },
    basis: { control: "text" },
    direction: {
      control: "select",
      options: ["row", "row-reverse", "column", "column-reverse"],
    },
    grow: { control: "number" },
    shrink: { control: "number" },
    wrap: {
      control: "select",
      options: ["nowrap", "wrap", "wrap-reverse"],
    },
    justify: {
      control: "select",
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
    },
    gap: { control: "text" },
    className: { control: "text" },
  },
} as Meta;

const Template: StoryFn<FlexProps> = (args) => (
  <Flex {...args}>
    <div style={{ background: "lightblue", padding: "10px" }}>Item 1</div>
    <div style={{ background: "lightgreen", padding: "10px" }}>Item 2</div>
    <div style={{ background: "lightcoral", padding: "10px" }}>Item 3</div>
  </Flex>
);

export const Default: StoryObj<typeof Flex> = {
  args: {
    direction: "row",
    justify: "center",
    align: "center",
    gap: "10px",
    children: (
      <>
        <div>A</div>
        <div>B</div>
      </>
    ),
  },
};

export const Column: StoryObj<typeof Flex> = {
  args: {
    direction: "column",
    justify: "center",
    align: "center",
    gap: "10px",
    children: (
      <>
        <div>A</div>
        <div>B</div>
      </>
    ),
  },
};

export const SpaceBetween: StoryObj<typeof Flex> = {
  args: {
    direction: "row",
    justify: "space-between",
    align: "center",
    gap: "10px",
    children: (
      <>
        <div>A</div>
        <div>B</div>
      </>
    ),
  },
};
