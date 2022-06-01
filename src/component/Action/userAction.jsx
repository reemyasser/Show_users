export const URL = 'https://jsonplaceholder.typicode.com/users';
export  const  getalluser= async()=>{

    let response = await fetch(URL);
    let payload = await response.json()
   
    
    return{ type:'LIST',payload   }
}


export const getUserDetails = async (id) =>{

    let response = await fetch(`${URL}/${id}`);
    let payload = await response.json()

    return {
        type:'DETAILS',
        payload
    }
}
export const getUserbysearch = async (text) =>{
    let response = await fetch(`${URL}`);
    let payload = await response.json()
  
    if(text!==""){
      
        payload=payload.filter((item)=>item.username.includes(text))
    }
  

    return {
        type:'search',
        payload
    }
}