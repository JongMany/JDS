import type { PropsWithChildren } from "react";
import type { ToastPayload } from "./types";
import type { ToastConfigProps } from "./ToastContext";

import { useRef, useState } from "react";
import { ToastContext } from "./ToastContext";
import { ToastContainer } from "./ToastContainer";
import { WithUndefined } from "@/types";
import { Toast } from "./Toast";

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toastPayload, setToastPayload] =
    useState<WithUndefined<ToastPayload>>(undefined);
  const timeoutRef = useRef<WithUndefined<NodeJS.Timeout>>(undefined);

  const handleToast = (toastProps: ToastConfigProps) => {
    const { duration = 3000 } = toastProps;

    if (toastPayload) {
      setToastPayload(undefined);
      clearTimeout(timeoutRef.current);

      timeoutRef.current = undefined;
    }

    setToastPayload(toastProps.payload);

    timeoutRef.current = setTimeout(() => {
      setToastPayload(undefined);
      timeoutRef.current = undefined;
    }, duration);
  };
  return (
    <ToastContext.Provider value={{ toast: handleToast }}>
      {children}
      <ToastContainer>
        {toastPayload && <Toast {...toastPayload} />}
      </ToastContainer>
    </ToastContext.Provider>
  );
};
