import { palette } from "@repo/tokens";
import { Button } from "../../components/button/Button";

export default {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: Object.keys(palette),
      control: "select",
    },
    ref: {
      table: {
        disable: true, // ✅ Controls 패널에서 숨김
      },
    },
  },
};

export const ButtonStory = {
  args: {
    size: "lg",
    children: "Button",
    variant: "outline",
    isDisabled: false,
    isLoading: true,
    leftIcon: "",
  },
};

// export const TextButtonStory = {
//   render: () => {
//     const { buttonProps } = useButton({
//       elementType: "div",
//       onClick: () => {
//         alert("ttt");
//       },
//     });

//     return (
//       <Text
//         {...buttonProps}
//         as="div"
//         fontSize="md"
//         color="green"
//         style={{ userSelect: "none", cursor: "pointer" }}
//       >
//         텍스트 버튼입니다.
//       </Text>
//     );
//   },
// };
