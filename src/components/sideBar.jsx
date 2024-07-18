import Pagination from "./pagination";
import PropTypes from "prop-types";

function SideBar({ notes }) {
  function openNav() {
    document.getElementById("mySidebar").style.width = "350px";
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
  }

  const completedNotes = notes.filter((note) => note.completed);

  const renderCompletedNotes = (notes) => (
    <div className="sidebarCard">
      {notes.map((note, index) => (
        <div key={index}>
          <h3>{note.title}</h3>
          {index < notes.length - 1 && <hr />}
        </div>
      ))}
    </div>
  );

  return (
    <div className="sidebarContainer">
      <button className="openbtn" onClick={openNav}>
        ☰ Notas Completadas
      </button>
      <div id="mySidebar" className="sidebar">
        <button className="closebtn" onClick={closeNav}>
          ×
        </button>
        <h2 className="titule">Notas Completadas</h2>
        <Pagination
          items={completedNotes}
          itemsPerPage={5}
          renderItems={renderCompletedNotes}
        />
      </div>
    </div>
  );
}

SideBar.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      userdId: PropTypes.number,
      id: PropTypes.number,
      title: PropTypes.string,
      // description: PropTypes.string,
      completed: PropTypes.bool,
      // date: PropTypes.string,
    })
  ),
};

export default SideBar;
