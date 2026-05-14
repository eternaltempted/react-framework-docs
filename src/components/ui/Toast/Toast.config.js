import {
  IconCode,
//   IconEdit,
  IconTrash,
  IconBookmark,
  IconCircleX,
  IconLoader,
  IconInfoCircle,
  IconAlertTriangle,
  IconExclamationCircle,
  IconCheck,
} from "@tabler/icons-react";

export const toastConfiguration = {
  success: {
    title: "Success",
    Icon: IconCheck,
    className: "bg-green-100/70 dark:bg-green-900/40 text-green-600",
    message: "Operation completed successfully.",
  },

  error: {
    title: "Error",
    Icon: IconExclamationCircle,
    className: "bg-red-100/70 dark:bg-red-900/40 text-red-600",
    message: "Something went wrong. Please try again.",
  },

  warning: {
    title: "Warning",
    Icon: IconAlertTriangle,
    className: "bg-yellow-100/70 dark:bg-yellow-900/40 text-yellow-600",
    message: "Be careful while performing this action.",
  },

  info: {
    title: "Information",
    Icon: IconInfoCircle,
    className: "bg-cyan-100/70 dark:bg-cyan-900/40 text-cyan-600",
    message: "Here is some useful information for you.",
  },

  loading: {
    title: "Loading",
    Icon: IconLoader,
    className: "bg-gray-100/70 dark:bg-gray-900/40 text-gray-600",
    message: "Please wait while the request is processing.",
  },

  offline: {
    title: "Offline",
    Icon: IconCircleX,
    className: "bg-zinc-100/70 dark:bg-zinc-900/40 text-zinc-600",
    message: "Internet connection was lost.",
  },

  saved: {
    title: "Saved",
    Icon: IconBookmark,
    className: "bg-emerald-100/70 dark:bg-emerald-900/40 text-emerald-600",
    message: "Your changes have been saved.",
  },

  deleted: {
    title: "Deleted",
    Icon: IconTrash,
    className: "bg-rose-100/70 dark:bg-rose-900/40 text-rose-600",
    message: "The item has been removed.",
  },

//   updated: {
//     title: "Updated",
//     Icon: IconEdit,
//     className: "bg-purple-100/70 dark:bg-purple-900/40 text-purple-600",
//     message: "Content has been updated.",
//   },

  development: {
    title: "Feature unavailable",
    Icon: IconCode,
    className: "bg-cyan-100/70 dark:bg-cyan-900/40 text-cyan-600",
    message: "This feature is currently under development.",
  },
};

export const TOAST_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
  LOADING: "loading",
  OFFLINE: "offline",
  SAVED: "saved",
  DELETED: "deleted",
//   UPDATED: "updated",
  DEVELOPMENT: "development",

};
