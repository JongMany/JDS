import { Button } from "../../components/button/Button";

export default {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const ButtonStory = {
  args: {
    size: "lg",
    children: "Button",
    variant: "outline",
    isDisabled: false,
    isLoading: true,
    leftIcon: "😀",
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
