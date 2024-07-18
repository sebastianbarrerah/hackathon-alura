import { Notas } from "../lib/types";
import Pagination from "./pagination";

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
    <div>
      <h1>SideBar</h1>
      <button className="openbtn" onClick={openNav}>
        ☰ Open Sidebar
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
  notes: Notas,
};

export default SideBar;
