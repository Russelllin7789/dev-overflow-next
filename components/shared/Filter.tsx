import React from "react";
import HomeSelect from "./HomeSelect";

interface FilterContent {
  id: number;
  content: string;
  value: string;
}

const AllFilters: FilterContent[] = [
  {
    id: 1,
    content: "Newest",
    value: "newest",
  },
  {
    id: 2,
    content: "Recommended",
    value: "recommended",
  },
  {
    id: 3,
    content: "Frequent",
    value: "frequent",
  },
  {
    id: 4,
    content: "Unanswered",
    value: "unanswered",
  },
];

const Filter = () => {
  return (
    <div>
      <div className="flex items-center max-md:hidden">
        {AllFilters.map((filter) => (
          <span key={filter.id} className="body-medium rounded-lg px-6 py-3">
            {filter.content}
          </span>
        ))}
      </div>
      <div className="hidden max-md:block">
        <HomeSelect placeholder="Select a Filter" options={AllFilters} />
      </div>
    </div>
  );
};

export default Filter;
