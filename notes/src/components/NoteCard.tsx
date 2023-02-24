import React from 'react';
import styled from '@emotion/styled';
import { Note } from '../store/features/notesSlice';

interface NoteProps {
  note: Note;
}

const NoteCard = ({ note }: NoteProps) => {
  return <Container>{note.note}</Container>;
};

const Container = styled.div({
  width: '200px',
  height: '200px',
  backgroundColor: '#84A59D',
  borderRadius: '3px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export default NoteCard;
