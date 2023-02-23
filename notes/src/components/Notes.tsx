import React from "react";
import { selectNotes } from "../store/features/notesSlice";
import { useAppSelector } from "../store/hooks";
import NoteCard from "./NoteCard";

const Notes = () => {
  const notes = useAppSelector(selectNotes);

  return (
    <div>
      {notes?.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default Notes;
