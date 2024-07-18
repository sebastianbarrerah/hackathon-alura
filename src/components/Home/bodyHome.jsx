import SideBar from "../sideBar";
import NotesContainer from "./notesContainer";

const BodyHome = () => {
  return (
    <section className="sectionHome">
      <SideBar notes={notes} />
      <NotesContainer notes={notes}/>
    </section>
  );
};

export default BodyHome;

const notes = [
  {
    title: "Nota 1",
    description: "Nota: hola esta es una nota de ejemplo😊",
    completed: true,
    date: "2024-07-11",
  },
  {
    title: "Nota 2",
    description: "Nota: hola esta es una nota de ejemplo😊 2",
    completed: false,
    date: "2024-07-12",
  },
  {
    title: "Nota 3",
    description: "Nota: hola esta es una nota de ejemplo😊 3",
    completed: true,
    date: "2024-07-13",
  },
  {
    title: "Nota 4",
    description: "Nota: hola esta es una nota de ejemplo😊 4",
    completed: false,
    date: "2024-07-14",
  },
  {
    title: "Nota 5",
    description: "Nota: hola esta es una nota de ejemplo😊 5",
    completed: true,
    date: "2024-07-15",
  },
  {
    title: "Nota 6",
    description: "Nota: hola esta es una nota de ejemplo😊 6",
    completed: true,
    date: "2024-07-16",
  },
  {
    title: "Nota 7",
    description: "Nota: hola esta es una nota de ejemplo😊 7",
    completed: true,
    date: "2024-07-17",
  },
  {
    title: "Nota 8",
    description: "Nota: hola esta es una nota de ejemplo😊 8",
    completed: true,
    date: "2024-07-18",
  },
  {
    title: "Nota 9",
    description: "Nota: hola esta es una nota de ejemplo😊 9",
    completed: true,
    date: "2024-07-19",
  },
  {
    title: "Nota 10",
    description: "Nota: hola esta es una nota de ejemplo😊 10",
    completed: true,
    date: "2024-07-20",
  },
  {
    title: "Nota 11",
    description: "Nota: hola esta es una nota de ejemplo😊 11",
    completed: true,
    date: "2024-07-21",
  },
  {
    title: "Nota 12",
    description: "Nota: hola esta es una nota de ejemplo😊 12",
    completed: true,
    date: "2024-07-22",
  },
  {
    title: "Nota 13",
    description: "Nota: hola esta es una nota de ejemplo😊 13",
    completed: true,
    date: "2024-07-23",
  },
  {
    title: "Nota 14",
    description: "Nota: hola esta es una nota de ejemplo😊 14",
    completed: true,
    date: "2024-07-24",
  },
  {
    title: "Nota 15",
    description: "Nota: hola esta es una nota de ejemplo😊 15",
    completed: true,
    date: "2024-07-25",
  },
  {
    title: "Nota 16",
    description: "Nota: hola esta es una nota de ejemplo😊 16",
    completed: true,
    date: "2024-07-26",
  },
  {
    title: "Nota 17",
    description: "Nota: hola esta es una nota de ejemplo😊 17",
    completed: true,
    date: "2024-07-27",
  },
  {
    title: "Nota 18",
    description: "Nota: hola esta es una nota de ejemplo😊 18",
    completed: true,
    date: "2024-07-28",
  },
  {
    title: "Nota 19",
    description: "Nota: hola esta es una nota de ejemplo😊 19",
    completed: true,
    date: "2024-07-29",
  },
  {
    title: "Nota 20",
    description: "Nota: hola esta es una nota de ejemplo😊 20",
    completed: true,
    date: "2024-07-30",
  },
  {
    title: "Nota 21",
    description: "Nota: hola esta es una nota de ejemplo😊 21",
    completed: true,
    date: "2024-07-31",
  },
  {
    title: "Nota 22",
    description: "Nota: hola esta es una nota de ejemplo😊 22",
    completed: true,
    date: "2024-08-01",
  },
  {
    title: "Nota 23",
    description: "Nota: hola esta es una nota de ejemplo😊 23",
    completed: true,
    date: "2024-08-02",
  },
  {
    title: "Nota 24",
    description: "Nota: hola esta es una nota de ejemplo😊 24",
    completed: true,
    date: "2024-08-03",
  },
  {
    title: "Nota 25",
    description: "Nota: hola esta es una nota de ejemplo😊 25",
    completed: true,
    date: "2024-08-04",
  },
  {
    title: "Nota 26",
    description: "Nota: hola esta es una nota de ejemplo😊 26",
    completed: true,
    date: "2024-08-05",
  },
  {
    title: "Nota 27",
    description: "Nota: hola esta es una nota de ejemplo😊 27",
    completed: true,
    date: "2024-08-06",
  },
  {
    title: "Nota 28",
    description: "Nota: hola esta es una nota de ejemplo😊 28",
    completed: true,
    date: "2024-08-07",
  },
  {
    title: "Nota 29",
    description: "Nota: hola esta es una nota de ejemplo😊 29",
    completed: true,
    date: "2024-08-08",
  },
  {
    title: "Nota 30",
    description: "Nota: hola esta es una nota de ejemplo😊 30",
    completed: true,
    date: "2024-08-09",
  },
];
