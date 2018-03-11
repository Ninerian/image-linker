import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import ItemTypes from "./itemTypes";
import Hotspot from "./Hotspot";

import Unistore from "unistore/full/react";
import actions from "./Actions";

const style = {
  width: "1500px",
  height: "750px",
  background: "#EEE",
  position: "relative"
};

const spec = {
  drop(props, monitor, component) {
    const delta = monitor.getDifferenceFromInitialOffset();
    const { x, y } = monitor.getItem();

    let left = Math.round(parseFloat(x) + delta.x);
    let top = Math.round(parseFloat(y) + delta.y);
    console.log(left, top);
    return {
      x: left,
      y: top
    };
  }
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget()
});

const Container = Unistore.connect("hotspots", actions)(
  ({ hotspots, actions, children, connectDropTarget }) =>
    connectDropTarget(
      <div style={style}>
        {hotspots && hotspots.map(({ id, x, y }) => 
        <Hotspot id={id} x={x} y={y} />)}
      </div>
    )
);

export default DropTarget(ItemTypes.HOTSPOT, spec, collect)(Container);
