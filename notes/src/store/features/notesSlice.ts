import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface Note {
  id: string;
  note: string;
  createdAt: string;
}

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote: (state, action: PayloadAction<Note>) => {
      state.notes = [...state.notes, action.payload];
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      const noteIndex = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );

      if (noteIndex > -1) {
        state.notes[noteIndex] = action.payload;
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
  },
});

export const selectNotes = (state: RootState) => state.notes?.notes;

export const { createNote, updateNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;
