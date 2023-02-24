import styled from '@emotion/styled';
import React from 'react';
import CreateNote from './components/CreateNote';
import Notes from './components/Notes';

const App = () => {
  return (
    <Container>
      <CreateNote />
      <Notes />
    </Container>
  );
};

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

export default App;
