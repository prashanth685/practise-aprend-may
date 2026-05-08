import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Trade from "./Components/Trade";

export default function App() {
  const yesterday = () => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d;
  };
  const [date, setDate] = useState(yesterday());

  return (
    <>
      {" "}
      <div>
        <label>Basic date</label>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <Trade />
    </>
  );
}
