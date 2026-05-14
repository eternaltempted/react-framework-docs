import { IconX } from "@tabler/icons-react";

export default function Toast({ message, onClick, Icon, className }) {
  return (
    <div
      className={`flex items-center gap-4 w-full max-w-xs rounded-2xl px-4 py-4 shadow-xl bg-white backdrop-blur-md dark:bg-zinc-800 border dark:border-gray-700/70  border-gray-200`}
    >
      <div className="flex flex-row justify-between items-center gap-3">
        <div
          className={`ms-auto flex items-center justify-center p-1.5 rounded-lg ${className}`}
        >
          {Icon && <Icon stroke={2} size={18} />}
        </div>
        <p className="text-black dark:text-white">{message}</p>
      </div>

      <span
        className="ms-auto flex items-center justify-center box-border cursor-pointer text-black dark:text-white dark:hover:bg-zinc-600/50 hover:bg-gray-200/50 p-1 rounded-md"
        onClick={onClick}
      >
        <IconX stroke={2} size={20} />
      </span>
    </div>
  );
}
