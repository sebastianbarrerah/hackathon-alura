import useNotesStore from "../../lib/useNotesStore";
import Modal from "./modal";
import Pagination from "../pagination";

const NotesContainer = () => {

  // const [titleValue, settitleValue] = useState('')

  const {
    notes,
    selectedNoteId,
    isModalVisible,
    currentNote,
    setSelectedNoteId,
    setIsModalVisible,
    setCurrentNote,
    addNote,
    editNote,
    deleteNote,
    // filterNotes,
    // notesFilters
  } = useNotesStore();

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

  // const handleFilter = (e) => {
  //   filterNotes(e.target.value)
  // }


  const renderNotes = (notes) => (
    <div className="notes-grid">
      {notes.map((note) => (
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
          {/* <input type="text" onChange={(e) => handleFilter(e)}/> */}
          Filtrar por:
          <button >+</button>
        </label>
        <button onClick={handleEditNote}>Editar</button>
        <button onClick={handleDeleteNote}>Eliminar</button>
      </div>
      <Pagination items={notes} itemsPerPage={18} renderItems={renderNotes} />
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
