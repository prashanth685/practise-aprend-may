import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const List = () => {
  const [search, setsearch] = useState("");
  const films = ["ajay", "abhay", "prithvi", "karna"];

  const filteredlist = useMemo(() => {
    return films.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, films]);
  return (
    <>
      <div style={{ height: "100vh", width: "200px" }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
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

export default List;
