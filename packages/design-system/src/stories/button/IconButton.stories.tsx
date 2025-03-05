import { IconButton, IconButtonProps } from "@/components/button";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { FaStar, FaHeart, FaSearch } from "react-icons/fa";

const meta: Meta<IconButtonProps> = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"], // 자동 문서화 지원
  argTypes: {
    isRound: { control: "boolean" },
    "aria-label": { control: "text" },
    icon: { control: false }, // 아이콘은 직접 설정해야 함
  },
};
export default meta;

// ✅ 기본 아이콘 버튼 (FaStar 아이콘)
export const Default: StoryObj<IconButtonProps> = {
  args: {
    icon: <FaStar />,
    "aria-label": "Star Icon Button",
    size: "md",
    isRound: true,
  },
};

// ❤️ 하트 아이콘 버튼 (isRound 활성화)
export const HeartButton: StoryObj<IconButtonProps> = {
  args: {
    icon: <FaHeart />,
    "aria-label": "Heart Icon Button",
    isRound: true,
    size: "sm",
  },
};

// 🔍 검색 아이콘 버튼
export const SearchButton: StoryObj<IconButtonProps> = {
  args: {
    icon: <FaSearch />,
    "aria-label": "Search Icon Button",
    size: "sm",
  },
};

// ❌ 아이콘 없이 텍스트만 있는 버튼
export const WithoutIcon: StoryObj<IconButtonProps> = {
  args: {
    children: "Click",
    "aria-label": "Text Button",
    size: "sm",
  },
};

// 🔄 로딩 버튼 (Spinner 예제)
export const LoadingButton: StoryObj<IconButtonProps> = {
  args: {
    icon: <FaSearch />,
    "aria-label": "Loading Button",
    isDisabled: true, // 비활성화 상태
    size: "sm",
  },
};
