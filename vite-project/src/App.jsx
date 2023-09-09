import React from "react";
import { createRoot } from "react-dom";
import Greeting_Card from "./components/Greeting_Card";

const students = [
  {
    name: "Dawid",
  },
  { name: "Natalia" },
  {
    name: "Anka",
  },
];


const App = (props) => {
  console.log("props", props);
  return (
    <div>
      {students.map((student) => (
        <Greeting_Card name={`Hello ${student.name} `} />
      ))}
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
