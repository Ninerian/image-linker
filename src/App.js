import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Hello from './Hello';
import Container from './Container'
import Hotspot from './Hotspot'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {'\u2728'}</h2>
    <Container>
      <Hotspot x="20" y="10" />
      <Hotspot x="50" y="120" />
    </Container>
  </div>
);

export default DragDropContext(HTML5Backend)(App);