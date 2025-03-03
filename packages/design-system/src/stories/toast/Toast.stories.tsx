import { Button } from "@/components/button";
import { useToast } from "@/components/toast/ToastContext";
import { ToastProvider } from "@/components/toast/ToastProvider";

export default {
  title: "Components/Toast",
  parameters: {
    layout: "centered",
  },
};

const Example = () => {
  const { toast } = useToast();

  return (
    <Button
      size="lg"
      onClick={() =>
        toast({
          payload: {
            message: "Hello, World!",
          },
        })
      }
    >
      Toast Button
    </Button>
  );
};

export const ToastStory = {
  render: () => (
    <ToastProvider>
      <Example />
    </ToastProvider>
  ),
};
