
import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Hello from './Hello';
import Container from './Container'
import Store from './Store'
import { Provider } from 'unistore/react'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <Provider store={Store}>
    <div style={styles}>
      <Hello name="CodeSandbox" />
      <h2>Start editing to see some magic happen {'\u2728'}</h2>
      <Container/>
    </div>
  </Provider>
);

export default DragDropContext(HTML5Backend)(App);