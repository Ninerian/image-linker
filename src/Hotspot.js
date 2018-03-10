import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './itemTypes'

const style = (toX, toY, isDragging ) => ({
  width: '20px',
  height: '20px',
  border: '1px dashed #CCC',
  textAlign: 'center',
  userSelect: 'none',
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: isDragging ? 0.5 : 1,
  cursor: 'move',
  transform: `translate3D(${toX}px, ${toY}px, 0px)`
})



const spec = {
  beginDrag(props, monitor, component) {
    const item = {id: props.id}
    console.log("drag started ", item)

    return item
  },

  endDrag(props, monitor, component) {
    console.log("drag ended")
  },
}
const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
})

const Hotspot = ({x, y, id, isDragging, connectDragSource }) => 
  connectDragSource(
    <div style={ style(x, y, isDragging ) }>+</div>)



export default DragSource(ItemTypes.HOTSPOT, spec, collect)(Hotspot)