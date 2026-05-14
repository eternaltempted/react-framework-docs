import { useState, useRef } from "react";
import { toastConfiguration } from "../components/ui/Toast/Toast.config";

export function useToast() {
  const [toasts, setToasts] = useState([]);
  const timeoutRef = useRef({});

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    clearTimeout(timeoutRef.current[id]);
    delete timeoutRef.current[id];
  };

  const showNotification = (type) => {
    const config = toastConfiguration[type];
    if (!config) return;

    setToasts((prev) => {
      if (prev.length >= 3) return prev;

      const id = crypto.randomUUID();
      const newToast = {
        id,
        type,
        ...config,
      };

      timeoutRef.current[id] = setTimeout(() => {
        removeToast(id);
      }, 3000);

      return [newToast, ...prev].slice(0, 3);
    });
  };

  const hideNotification = (id) => {
    removeToast(id);
  };

  return {
    toasts,
    showNotification,
    hideNotification,
  };
}
