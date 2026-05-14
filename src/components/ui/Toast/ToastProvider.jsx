import { ToastContext } from "./ToastContext";
import { useToast } from "../../../hooks/useToast";
import Toast from "./Toast";

export function ToastProvider({ children }) {
  const { toasts, showNotification, hideNotification } = useToast();

  return (
    <ToastContext.Provider
      value={{ toasts, showNotification, hideNotification }}
    >
      {children}

      <div className="fixed bottom-5 right-5 flex flex-col gap-2 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={toast.isRemoving ? "animate-fadeOut" : "animate-fadeIn"}
          >
            <Toast
              key={toast.id}
              message={toast.message}
              onClick={() => hideNotification(toast.id)}
              Icon={toast.Icon}
              className={toast.className}
            />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
