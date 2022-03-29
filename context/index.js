import { useState, useEffect, useReducer, createContext } from "react";
import { Songs } from "../components/player/songs";
import { user } from "./reducers/user.reducers";

// initial state
const initialState = {
  user: {},
  logged:false,
  inPlay: Songs[0],
  volume: 0.9,
  index: 0,
  isPlaying: false,
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
  const [state, dispatch] = useReducer(combineReducers(user), initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };