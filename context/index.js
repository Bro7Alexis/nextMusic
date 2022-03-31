import { useReducer, createContext } from "react";
import { global } from "./reducers/global.reducers";

// initial state
const initialState = {
  user: {},
  logged:false,
  darkMode: false,
  inPlay: {},
  volume: 0.9,
  index: 0,
  isPlaying: false,
  favoris:[]
};

// create context
const Context = createContext({});

// combine reducer function
const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(global), initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };