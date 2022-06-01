import { createContext, useContext, useReducer } from "react"
import root  from "../Reducer/index";

export const usercontext=createContext();
export const Provider = ({children}) => {
   const [state,dispatch]= useReducer(root,{
    users: {
        list: [],
        details: null,
        search:[],
      }
   })
    return(
<usercontext.Provider value={{state,dispatch}}>
{children}
</usercontext.Provider>
    )
}