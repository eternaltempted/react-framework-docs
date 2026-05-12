export default function Search({
  search,
  setSearch,
  setCurrentPage,
  setActiveCard,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
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
        className="border border-gray-200 rounded-full px-3 py-2 text-gray-700 outline-none dark:border-zinc-700 dark:text-white"
      />
    </form>
  );
}
