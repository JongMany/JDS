import type { ToastPayload } from "./types";

import { createContext, useContext } from "react";

export type ToastConfigProps = {
  payload: ToastPayload;
  duration?: number;
};

export type ToastContextType = {
  toast: (toastProps: ToastConfigProps) => void;
};

export const ToastContext = createContext<ToastContextType>({
  toast: () => {},
});

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};
