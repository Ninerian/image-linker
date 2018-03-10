import React, {Component} from 'react';

const style={
  width: '1500px',
  height: '750px',
  background: '#EEE',
  position: 'relative'
}
const Container = ({children}) => <div style={style}>{children}</div>



export default Container