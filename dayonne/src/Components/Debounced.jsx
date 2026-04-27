import React from "react";
import { useState } from "react";
import { useDebounce } from "./useDebounce";
import { useMemo } from "react";

const Debounced = () => {
  const [search, setsearch] = useState("");
  const debouncedsearch = useDebounce(search, 300);

  const films = ["ajay", "mourya", "abhi"];

  const filteredlist = useMemo(() => {
    return films.filter((item) => {
      item.toLowerCase().includes(debouncedsearch.toLowerCase());
    });
  }, [debouncedsearch]);
  return (
    <>
      <div style={{ height: "100vh", width: "200px" }}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search by film name"
        />
        <ul>
          {filteredlist.map((film, index) => (
            <li key={index}>{film}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Debounced;
