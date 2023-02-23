import styled from "@emotion/styled";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { createNote } from "../store/features/notesSlice";
import { useAppDispatch } from "../store/hooks";

const CreateNote = () => {
  const [note, setNote] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };

  const handleAddClick = () => {
    dispatch(
      createNote({
        id: uuidv4(),
        note: note,
        createdAt: new Date().getTime().toString(),
      })
    );
  };

  return (
    <Container>
      <TextArea value={note} onChange={handleNoteChange} />
      <Button onClick={handleAddClick}>Add</Button>
    </Container>
  );
};

const Container = styled.div({
  width: "200px",
  height: "200px",
  backgroundColor: "#84A59D",
  borderRadius: "3px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const TextArea = styled.textarea({
  backgroundColor: "#cedbd8",
  width: "90%",
  height: "70%",
  border: "none",
  resize: "none",
  color: "#F7EDE2",
  textAlign: "center",
  borderRadius: "3px",

  "&:focus-visible": {
    outline: "none",
  },
});

const Button = styled.button({
  backgroundColor: "#42534f",
  height: "25px",
  border: "none",
  borderRadius: "2px",
  marginTop: "15px",
  color: "#F7EDE2",
});

export default CreateNote;
