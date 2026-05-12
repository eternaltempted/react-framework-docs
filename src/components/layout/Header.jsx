import { IconBrandReact } from "@tabler/icons-react";
import ToggleTheme from "../ui/ToggleTheme";

export default function Header() {
  const sections = [
    {
      name: "Concepts",
      href: "#concepts",
    },
    { name: "Cases", href: "#cases" },
  ];

  return (
    <header className="flex justify-center pt-4 sticky top-4 z-50">
      <nav className="flex items-center justify-between gap-8 bg-white/80 backdrop-blur-md shadow-lg rounded-xl px-4 py-3 border-gray-100 dark:border-gray-900 border dark:bg-zinc-900/80">
        <a
          className="text-cyan-400 flex flex-row gap-2 items-center hover:text-cyan-500 transition-colors cursor-pointer"
          href="#"
        >
          <span>
            <IconBrandReact stroke={2} size={30} />
          </span>
          <h2 className="font-bold text-xl">React</h2>
        </a>
        <ul className="flex flex-row justify-between items-center gap-8">
          {sections.map((sect) => (
            <li className="" key={sect.name}>
              <a
                className="text-gray-700 dark:text-white hover:text-cyan-500 transition-colors"
                href={sect.href}
              >
                {sect.name}
              </a>
            </li>
          ))}
        </ul>
        <ToggleTheme></ToggleTheme>
      </nav>
    </header>
  );
}
