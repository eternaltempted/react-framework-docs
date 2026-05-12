import { IconSearch } from "@tabler/icons-react";

export default function Search({
  search,
  setSearch,
  setCurrentPage,
  setActiveCard,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <IconSearch stroke={2} />
        </span>
        <input
          type="text"
          placeholder="Search"
          value={search}
          name="search"
          onChange={(e) => {
            setActiveCard(null);
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border border-gray-200 rounded-full pl-10 pr-3 py-2 text-gray-700 outline-none dark:border-zinc-700 dark:text-white"
        />
      </div>
    </form>
  );
}
