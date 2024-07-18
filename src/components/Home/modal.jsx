import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ isVisible, onClose, note, onSave }) => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setCompleted(note.completed || false);
    } else {
      setTitle("");
      setCompleted(false);
    }
  }, [note]);

  const handleSave = () => {
    onSave({ title, completed });
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{note ? "Editar Nota" : "Nueva Nota"}</h2>
        <label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Descripción:
          <textarea
          // value={description}
          // onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <div className="checkbox-container">
          <label className="checkbox-label">Completada:</label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </div>
        <button onClick={handleSave}>Guardar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  note: PropTypes.shape({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
  }),
  onSave: PropTypes.func.isRequired,
};

export default Modal;
