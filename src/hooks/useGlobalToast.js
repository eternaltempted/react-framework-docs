import { useContext } from "react";
import { ToastContext } from "../components/ui/Toast/ToastContext";

export function useGlobalToast() {
  return useContext(ToastContext);
}
