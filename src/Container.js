import React, {Component} from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './itemTypes'

const style={
  width: '1500px',
  height: '750px',
  background: '#EEE',
  position: 'relative'
}

const spec = {
  drop(props, monitor, component) { 
    const delta = monitor.getDifferenceFromInitialOffset()
    const {x,y} = monitor.getItem()

    let left = Math.round(parseFloat(x) + delta.x)
    let top = Math.round(parseFloat(y) + delta.y)
   console.log(left, top)
   return {
     x: left,
     y: top
   }
  }

}

const collect = ( connect, monitor ) => ({
  connectDropTarget: connect.dropTarget(),
})

const Container = ({ children, connectDropTarget}) => 
  connectDropTarget(<div style={style}>{children}</div>)


export default DropTarget(ItemTypes.HOTSPOT, spec, collect)(Container)