import React,{createContext, useReducer,useContext} from 'react';
export const StateContext = createContext();
export const StateHandler = ({
    initialState,reducer,children
        }) =>
     (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
       {children}
    </StateContext.Provider>
     );

export const UseStateContext =()=>useContext(StateContext);
