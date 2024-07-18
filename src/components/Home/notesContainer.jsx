import { useState } from "react";
import PropTypes from "prop-types";
import { Nota } from "../../lib/types";

const NotesContainer = ({ notes }) => {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  const handleNewNote = () => {
    // Lógica para añadir una nueva nota
  };

  const handleEditNote = () => {
    if (selectedNoteIndex !== null) {
      // Lógica para editar la nota seleccionada
      const noteToEdit = notes[selectedNoteIndex];
      console.log("Editando nota:", noteToEdit);
    }
  };

  const handleDeleteNote = () => {
    if (selectedNoteIndex !== null) {
      // Lógica para eliminar la nota seleccionada
      const noteToDelete = notes[selectedNoteIndex];
      console.log("Eliminando nota:", noteToDelete);
    }
  };

  const handleSelectNote = (index) => {
    setSelectedNoteIndex(index);
  };

  return (
    <div className="notes-container">
      <div className="notes-options">
        <button onClick={handleNewNote}>+Nueva</button>
        <label>
          Filtrar por:
          <button>+</button>
        </label>
        <button onClick={handleEditNote}>Editar</button>
        <button onClick={handleDeleteNote}>Eliminar</button>
      </div>
      <div className="notes-grid">
        {notes.map((note, index) => (
          <div
            key={index}
            className={`note-card ${
              index === selectedNoteIndex ? "selected" : ""
            }`}
            onClick={() => handleSelectNote(index)}
          >
            <h3>{note.title}</h3>
            <p>{note.date}</p>
            <p>{note.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

NotesContainer.propTypes = {
  notes: PropTypes.arrayOf(Nota).isRequired,
};

export default NotesContainer;
