import { create } from "zustand";
import axios from "axios";

const useNotesStore = create((set) => ({
  notes: [],
  selectedNoteId: null,
  isModalVisible: false,
  currentNote: null,
  fetchNotes: async () => {
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
      set({ notes: fetchedNotes });
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  },
  setNotes: (notes) => set({ notes }),
  setSelectedNoteId: (id) => set({ selectedNoteId: id }),
  setIsModalVisible: (isVisible) => set({ isModalVisible: isVisible }),
  setCurrentNote: (note) => set({ currentNote: note }),
  addNote: async (note) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        note,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      set((state) => ({ notes: [...state.notes, response.data] }));
    } catch (error) {
      console.error("Error adding note:", error);
    }
  },
  editNote: async (note) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${note.id}`,
        note,
        { headers: { "Content-Type": "application/json" } }
      );
      set((state) => ({
        notes: state.notes.map((n) => (n.id === note.id ? response.data : n)),
      }));
    } catch (error) {
      console.error("Error editing note:", error);
    }
  },
  deleteNote: async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      set((state) => ({
        notes: state.notes.filter((note) => note.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  },
}));

export default useNotesStore;
