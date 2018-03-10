import React, { Component } from 'react';

const style = {
  width: '20px',
  height: '20px',
  border: '1px dashed #CCC',
  textAlign: 'center',
  userSelect: 'none',
  position: 'absolute',
  top: 0,
  left: 0
}

const Hotspot = ({x,y}) => 
  <div style={{ transform: `translate3D(${x}px, ${y}px, 0px)`, ...style} }>+</div>



export default Hotspot