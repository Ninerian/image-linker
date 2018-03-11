import createStore from "unistore";
import devtools from "unistore/devtools";

const initialState = {
  hotspots: [
    {
      id: 1,
      x: 10,
      y: 20
    },
    {
      id: 2,
      x: 100,
      y: 20
    }
  ]
};

// Initialize storage, use devtools in development
const store =
  process.env.NODE_ENV === "production"
    ? createStore(initialState)
    : devtools(createStore(initialState));

export default store;
