import { useState } from "react";
import { features, categories } from "../../data/features";
import Button from "../ui/Button";
import Search from "../features/Search";

export default function FeaturesList() {
  const [activeCard, setActiveCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  // const [itemsPerPage, setItemsPerPage] = useState(15);

  const itemsPerPage = 16;
  const filteredConcepts = features.filter((feature) => {
    const matchesCategory =
      selectedCategory === "All" || feature.category === selectedCategory;

    const matchesSearch = feature.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredConcepts.length / itemsPerPage);

  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const visibleConcepts = filteredConcepts.slice(startIdx, endIdx);

  return (
    <section>
      <div className="text-center pb-4">
        <h2 className="font-bold text-4xl py-2 dark:text-white">Concepts</h2>
        <p className="text-xl text-gray-600 dark:text-gray-200">
          Learn important React concepts and terminology.
        </p>
      </div>

      <div className="px-8">
        <div className="flex justify-center pb-4">
          <Search
            search={search}
            setSearch={setSearch}
            setCurrentPage={setCurrentPage}
            setActiveCard={setActiveCard}
          ></Search>
        </div>

        <div className="flex flex-row flex-wrap gap-4 justify-center pb-8">
          {categories.map((category) => (
            <Button
              key={category}
              func={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
                setActiveCard(null);
              }}
              style={`px-4 py-2 rounded-full cursor-pointer transition-all 
              ${
                selectedCategory === category
                  ? "border border-cyan-200 bg-cyan-200 dark:bg-cyan-200 dark:text-black"
                  : "border border-gray-200 hover:bg-gray-100 dark:border-zinc-700 dark:hover:bg-zinc-800 dark:text-white"
              }`}
              text={category}
            ></Button>
          ))}
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {!visibleConcepts.length ? (
            <li className="col-span-full flex items-center justify-center">
              <p className="text-center dark:text-white text-black">
                No concepts found.
              </p>
            </li>
          ) : (
            visibleConcepts.map((feat) => (
              <li
                onClick={() =>
                  setActiveCard(activeCard === feat.name ? null : feat.name)
                }
                className={`cursor-pointer bg-cyan-400 rounded-lg shadow-md p-4 max-w-75 hover:bg-cyan-500 text-white transition-transform duration-300`}
                key={feat.name}
              >
                <h2 className="font-semibold">{feat.name}</h2>
                {activeCard === feat.name && <p>{feat.definition}</p>}
              </li>
            ))
          )}
        </ul>

        {filteredConcepts.length > 0 && (
          <div className="flex justify-center items-center gap-4 pt-8 dark:text-white text-black">
            <Button
              text={"<"}
              func={() => {
                setCurrentPage(currentPage - 1);
                setActiveCard(null);
              }}
              style="px-4 py-2 rounded-full bg-cyan-400 text-white disabled:opacity-50"
              disabled={currentPage === 1}
            ></Button>
            <span>
              {currentPage} / {totalPages}
            </span>
            <Button
              text=">"
              func={() => {
                setCurrentPage(currentPage + 1);
                setActiveCard(null);
              }}
              style="px-4 py-2 rounded-full bg-cyan-400 text-white disabled:opacity-50"
              disabled={currentPage === totalPages}
            />
          </div>
        )}
      </div>
    </section>
  );
}
