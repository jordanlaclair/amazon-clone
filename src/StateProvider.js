/* this whole process is like creating a global variable for global 
access to  props*/
import React, { createContext, useContext, useReducer } from "react";

//DATA LAYER
export const StateContext = createContext();
//BUILD A PROVIDER. THIS StateProvider VARIABLE ACTS LIKE A COMPONENT
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children} {/* refers to the whole App */}
	</StateContext.Provider>
);
//all children of State Provider have access to those values
//the provider gives access
//the consumer calls the values

//this is how we use it inside of another component
export const useStateValue = () => useContext(StateContext);
