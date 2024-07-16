import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SideBar from "./components/sideBar";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <SideBar notes={notes} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

const notes = [
  {
    title: "Nota 1",
    description: "Descripción 1",
    completed: true,
    date: "2024-07-11",
  },
  {
    title: "Nota 2",
    description: "Descripción 2",
    completed: false,
    date: "2024-07-12",
  },
  {
    title: "Nota 3",
    description: "Descripción 3",
    completed: true,
    date: "2024-07-13",
  },
  {
    title: "Nota 4",
    description: "Descripción 4",
    completed: false,
    date: "2024-07-14",
  },
  {
    title: "Nota 5",
    description: "Descripción 5",
    completed: true,
    date: "2024-07-15",
  },
  {
    title: "Nota 6",
    description: "Descripción 6",
    completed: true,
    date: "2024-07-16",
  },
  {
    title: "Nota 7",
    description: "Descripción 7",
    completed: true,
    date: "2024-07-17",
  },
  {
    title: "Nota 8",
    description: "Descripción 8",
    completed: true,
    date: "2024-07-18",
  },
  {
    title: "Nota 9",
    description: "Descripción 9",
    completed: true,
    date: "2024-07-19",
  },
  {
    title: "Nota 10",
    description: "Descripción 10",
    completed: true,
    date: "2024-07-20",
  },
  {
    title: "Nota 11",
    description: "Descripción 11",
    completed: true,
    date: "2024-07-21",
  },
  {
    title: "Nota 12",
    description: "Descripción 12",
    completed: true,
    date: "2024-07-22",
  },
  {
    title: "Nota 13",
    description: "Descripción 13",
    completed: true,
    date: "2024-07-23",
  },
  {
    title: "Nota 14",
    description: "Descripción 14",
    completed: true,
    date: "2024-07-24",
  },
  {
    title: "Nota 15",
    description: "Descripción 15",
    completed: true,
    date: "2024-07-25",
  },
  {
    title: "Nota 16",
    description: "Descripción 16",
    completed: true,
    date: "2024-07-26",
  },
  {
    title: "Nota 17",
    description: "Descripción 17",
    completed: true,
    date: "2024-07-27",
  },
  {
    title: "Nota 18",
    description: "Descripción 18",
    completed: true,
    date: "2024-07-28",
  },
  {
    title: "Nota 19",
    description: "Descripción 19",
    completed: true,
    date: "2024-07-29",
  },
  {
    title: "Nota 20",
    description: "Descripción 20",
    completed: true,
    date: "2024-07-30",
  },
  {
    title: "Nota 21",
    description: "Descripción 21",
    completed: true,
    date: "2024-07-31",
  },
  {
    title: "Nota 22",
    description: "Descripción 22",
    completed: true,
    date: "2024-08-01",
  },
  {
    title: "Nota 23",
    description: "Descripción 23",
    completed: true,
    date: "2024-08-02",
  },
  {
    title: "Nota 24",
    description: "Descripción 24",
    completed: true,
    date: "2024-08-03",
  },
  {
    title: "Nota 25",
    description: "Descripción 25",
    completed: true,
    date: "2024-08-04",
  },
  {
    title: "Nota 26",
    description: "Descripción 26",
    completed: true,
    date: "2024-08-05",
  },
  {
    title: "Nota 27",
    description: "Descripción 27",
    completed: true,
    date: "2024-08-06",
  },
  {
    title: "Nota 28",
    description: "Descripción 28",
    completed: true,
    date: "2024-08-07",
  },
  {
    title: "Nota 29",
    description: "Descripción 29",
    completed: true,
    date: "2024-08-08",
  },
  {
    title: "Nota 30",
    description: "Descripción 30",
    completed: true,
    date: "2024-08-09",
  },
];
