import { UserReducer } from "./userReducer"

export default (state,action)=>{
    
    return {
        users:UserReducer(state.users,action),
    }
}