const actions = store => {
  getHotspot: ({ hotspots }, id) => {
    const hotspot = hotspots.find(hotspot => hotspot.id === id);
    return { hotspot: hotspot };
  };
};

export default actions