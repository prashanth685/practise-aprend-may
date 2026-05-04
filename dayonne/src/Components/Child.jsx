import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";

const Child = (props) => {
  const fetchdata = useCallback(async () => {
    const res = fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((json) => console.log(json));
  });
  useEffect(() => {
    const id = setInterval(() => {
      console.log("tick");
    }, 1000);
    fetchdata();
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <h2>Your name ...{props.name}</h2>
    </>
  );
};

export default Child;
