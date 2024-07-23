import { create } from "zustand";
import axios from "axios";

const useNotesStore = create((set) => ({
  notes: [],
  filteredNotes: [],
  selectedNoteId: null,
  isModalVisible: false,
  currentNote: null,
  searchTerm: "",
  fetchNotes: async () => {
    console.log("fetchNotes");
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const fetchedNotes = response.data.map((todo) => ({
        userId: todo.userId,
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
      }));
      set({ notes: fetchedNotes, filteredNotes: fetchedNotes });
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  },
  setNotes: (notes) => set({ notes }),
  setSelectedNoteId: (id) => set({ selectedNoteId: id }),
  setIsModalVisible: (isVisible) => set({ isModalVisible: isVisible }),
  setCurrentNote: (note) => set({ currentNote: note }),
  addNote: async (note) => {
    console.log("addNote");
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        note,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      set((state) => {
        const updatedNotes = [...state.notes, response.data];
        return {
          notes: updatedNotes,
          filteredNotes: updatedNotes.filter((n) =>
            n.title.toLowerCase().includes(state.searchTerm.toLowerCase())
          ),
        };
      });
    } catch (error) {
      console.error("Error adding note:", error);
    }
  },
  editNote: async (note) => {
    console.log("editNote");
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${note.id}`,
        note,
        { headers: { "Content-Type": "application/json" } }
      );
      set((state) => {
        const updatedNotes = state.notes.map((n) =>
          n.id === note.id ? response.data : n
        );
        return {
          notes: updatedNotes,
          filteredNotes: updatedNotes.filter((n) =>
            n.title.toLowerCase().includes(state.searchTerm.toLowerCase())
          ),
        };
      });
    } catch (error) {
      console.error("Error editing note:", error);
    }
  },
  deleteNote: async (id) => {
    console.log("deleteNote");
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      set((state) => {
        const updatedNotes = state.notes.filter((note) => note.id !== id);
        return {
          notes: updatedNotes,
          filteredNotes: updatedNotes.filter((n) =>
            n.title.toLowerCase().includes(state.searchTerm.toLowerCase())
          ),
        };
      });
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  },
  setSearchTerm: (term) => {
    set((state) => ({
      searchTerm: term,
      filteredNotes: state.notes.filter((note) =>
        note.title.toLowerCase().includes(term.toLowerCase())
      ),
    }));
  },
}));

export default useNotesStore;
