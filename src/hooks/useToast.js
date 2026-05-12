import { useState, useRef } from "react";

export function useToast() {
  const [currentToast, setCurrentToast] = useState(null);
  const timeoutRef = useRef(null);

  const types = [
    {
      type: "success",
      title: "Success",
      message: "Operation completed successfully.",
    },

    {
      type: "error",
      title: "Error",
      message: "Something went wrong. Please try again.",
    },

    {
      type: "warning",
      title: "Warning",
      message: "Be careful while performing this action.",
    },

    {
      type: "info",
      title: "Information",
      message: "Here is some useful information for you.",
    },

    {
      type: "loading",
      title: "Loading",
      message: "Please wait while the request is processing.",
    },

    {
      type: "offline",
      title: "Offline",
      message: "Internet connection was lost.",
    },

    {
      type: "saved",
      title: "Saved",
      message: "Your changes have been saved successfully.",
    },

    {
      type: "deleted",
      title: "Deleted",
      message: "The item has been removed successfully.",
    },

    {
      type: "updated",
      title: "Updated",
      message: "Content updated successfully.",
    },

    {
      type: "development",
      title: "Feature unavailable",
      message:
        "This feature is currently under development. Please check back later.",
    },
  ];

  const showNotification = (type) => {
    clearTimeout(timeoutRef.current);

    setCurrentToast(types.find((t) => t.type === type));

    timeoutRef.current = setTimeout(() => {
      setCurrentToast(null);
    }, 3000);
  };

  const hideNotification = () => {
    setCurrentToast(null);
  };

  return { currentToast, showNotification, hideNotification, types };
}
