import { useTheme } from "../../hooks/useTheme";
import { IconMoon, IconSun } from "@tabler/icons-react";

import Button from "./Button";

export default function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  const lightIcon = <IconSun stroke={2} />;
  const darkIcon = <IconMoon stroke={2} />;

  return (
    <Button
      style={"cursor-pointer"}
      icon={
        theme === "light" ? (
          <span className="text-gray-700 hover:text-cyan-500 transition-colors">
            {darkIcon}
          </span>
        ) : (
          <span className="text-white hover:text-cyan-500 transition-colors">
            {lightIcon}
          </span>
        )
      }
      func={toggleTheme}
    ></Button>
  );
}
