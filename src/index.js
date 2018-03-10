import React from 'react';
import { render } from 'react-dom';
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
      <Hotspot x="20" y="10"/>
      <Hotspot x="50" y="120"/>
    </Container>
  </div>
);

render(<App />, document.getElementById('root'));
