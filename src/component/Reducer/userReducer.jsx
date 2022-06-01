export const UserReducer=(state=[],action)=>{
    if(action.type==="LIST")
    return {...state,list:action.payload}
    else if(action.type==="DETAILS")
 {
     console.log(state)
        return {...state,details:action.payload}
    }
    else if(action.type=== 'CLEAR'){
        return {
            ...state,
            details:null,      
        }
    }
    else if(action.type=== 'search'){
        return { ...state,list:action.payload
        }
    }
    return state


}