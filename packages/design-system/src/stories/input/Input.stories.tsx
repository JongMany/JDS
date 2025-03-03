import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../../components/input/Input";
import type { InputProps } from "../../components/input/types";
import { useState } from "react";
import { InputGroup, InputLeftAddon } from "@/components/input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg"],
    },
    color: {
      control: "select",
      options: ["gray", "red", "blue", "green"],
    },
    errorBorderColor: {
      control: "color",
    },
    focusBorderColor: {
      control: "color",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// ✅ 기본 Input 스토리
export const Default = (props: Partial<InputProps>) => {
  const [value, setValue] = useState("");

  return (
    <InputGroup size="lg">
      <InputLeftAddon size="lg">$</InputLeftAddon>
      <Input
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text..."
      />
    </InputGroup>
  );
};

Default.args = {
  size: "lg",
  color: "gray",
  errorBorderColor: "#E53E3E",
  focusBorderColor: "#3182CE",
};

// ✅ 작은 크기 Input
export const Small = Default.bind({});
Small.args = {
  ...Default.args,
  size: "sm",
};

// ✅ 큰 크기 Input
export const Large = Default.bind({});
Large.args = {
  ...Default.args,
  size: "lg",
};

// Error
export const ErrorState = (props: Partial<InputProps>) => {
  return (
    <InputGroup size="lg">
      <Input {...props} isInvalid={true} />
    </InputGroup>
  );
};

ErrorState.args = {
  ...Default.args,
  errorBorderColor: "#FF0000",
};

// ✅ 포커스 상태 Input
export const FocusState = (props: Partial<InputProps>) => {
  return (
    <InputGroup size="lg">
      <Input {...props} />
    </InputGroup>
  );
};

FocusState.args = {
  ...Default.args,
  focusBorderColor: "#00FF00",
};
