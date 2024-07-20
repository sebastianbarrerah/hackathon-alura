import { useState, useEffect } from "react";
import useNotesStore from "../../lib/useNotesStore";
import Modal from "./modal";
import Pagination from "../pagination";

const NotesContainer = () => {
  const {
    notes,
    filteredNotes,
    selectedNoteId,
    isModalVisible,
    currentNote,
    setSelectedNoteId,
    setIsModalVisible,
    setCurrentNote,
    addNote,
    editNote,
    deleteNote,
    setSearchTerm,
  } = useNotesStore((state) => ({
    notes: state.notes,
    filteredNotes: state.filteredNotes,
    selectedNoteId: state.selectedNoteId,
    isModalVisible: state.isModalVisible,
    currentNote: state.currentNote,
    setSelectedNoteId: state.setSelectedNoteId,
    setIsModalVisible: state.setIsModalVisible,
    setCurrentNote: state.setCurrentNote,
    addNote: state.addNote,
    editNote: state.editNote,
    deleteNote: state.deleteNote,
    setSearchTerm: state.setSearchTerm,
  }));

  const [searchTerm, setSearchTermState] = useState("");

  useEffect(() => {
    setSearchTerm(searchTerm);
  }, [searchTerm, setSearchTerm]);

  const handleNewNote = () => {
    setCurrentNote(null);
    setIsModalVisible(true);
  };

  const handleEditNote = () => {
    if (selectedNoteId !== null) {
      const noteToEdit = notes.find((note) => note.id === selectedNoteId);
      setCurrentNote(noteToEdit);
      setIsModalVisible(true);
    }
  };

  const handleDeleteNote = () => {
    if (selectedNoteId !== null) {
      deleteNote(selectedNoteId);
      setSelectedNoteId(null);
    }
  };

  const handleSelectNote = (id) => {
    setSelectedNoteId(id);
  };

  const handleSaveNote = async (note) => {
    if (currentNote) {
      await editNote({ ...currentNote, ...note });
    } else {
      await addNote(note);
    }
    setIsModalVisible(false);
  };

  const handleFilter = (e) => {
    setSearchTermState(e.target.value);
  };

  const renderNotes = (filteredNotes) => (
    <div className="notes-grid">
      {filteredNotes.map((note) => (
        <div
          key={note.id}
          className={`note-card ${
            note.id === selectedNoteId ? "selected" : ""
          }`}
          onClick={() => handleSelectNote(note.id)}
        >
          <h3>{note.title}</h3>
          <p>{new Date().toISOString().split("T")[0]}</p>
          <p>{note.title}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="notes-container">
      <div className="notes-options">
        <button onClick={handleNewNote}>+Nueva</button>
        <label>
          Filtrar por título:
          <input type="text" value={searchTerm} onChange={handleFilter} />
        </label>
        <button onClick={handleEditNote}>Editar</button>
        <button onClick={handleDeleteNote}>Eliminar</button>
      </div>
      <Pagination items={filteredNotes} itemsPerPage={18} renderItems={renderNotes} />
      <Modal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        note={currentNote}
        onSave={handleSaveNote}
      />
    </div>
  );
};

export default NotesContainer;
