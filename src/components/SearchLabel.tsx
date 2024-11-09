"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";

const SearchLabel: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<
    { text: string; href: string }[]
  >([]);

  const data = [
    { text: "History", href: "/history" },
    { text: "Quiz", href: "/quiz" },
    { text: "Test English", href: "/introETest" },
    { text: "About Us", href: "/aboutUs" },
    { text: "Blog", href: "/Blog" },
  ];

  // Filter data based on the search term
  const filterSuggestions = (term: string) => {
    if (term.length > 0) {
      const filtered = data.filter((item) =>
        item.text.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    filterSuggestions(e.target.value);
  };

  return (
    <div className="relative">
      <label
        className="relative bg-white flex flex-col md:flex-row items-center border py-2 px-2 rounded-lg gap-2 hover:shadow-lg transition-all duration-300"
        htmlFor="search-bar"
      >
        <input
          id="search-bar"
          placeholder="What do you want to learn?"
          className="px-3 py-2 w-full rounded-lg flex-1 outline-none bg-white"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="w-full md:w-auto px-1 py-1 bg-black rounded-full border-black text-white active:scale-95 duration-100 border transition-all disabled:opacity-70">
          <div className="relative flex items-center justify-center">
            <Search />
          </div>
        </button>
      </label>

      {/* Dropdown with filtered suggestions */}
      {filteredSuggestions.length > 0 && (
        <div className="absolute z-10 top-[50px] w-full bg-white border rounded-b-lg border-t-0 shadow-lg ">
          {filteredSuggestions.map((item, index) => (
            <Link key={index} href={item.href}>
              <div className="block px-4 py-2 hover:scale-95 transition-all duration-300">
                {item.text}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchLabel;
