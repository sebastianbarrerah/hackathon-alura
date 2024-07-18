import { useEffect } from 'react';
import SideBar from "../sideBar";
import NotesContainer from "./notesContainer";
import useNotesStore from "../../lib/useNotesStore";

const BodyHome = () => {
  const { notes, fetchNotes } = useNotesStore();

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return (
    <section className="sectionHome">
      <SideBar notes={notes} />
      <NotesContainer />
    </section>
  );
};

export default BodyHome;