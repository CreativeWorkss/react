const { createStore } = require("redux");

const initialState = {
  value: 100,
};

const myReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "ADD") {
    newState.value = newState.value + 10;
  }
  if (action.type === "SUBTRACT") {
    newState.value = newState.value - 20;
  }

  return newState;
};

const store = createStore(myReducer);

store.dispatch({ type: "ADD" });
store.dispatch({ type: "SUBTRACT" });

console.log(store.getState());
