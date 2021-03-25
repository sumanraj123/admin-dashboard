import React,{useState} from "react";

let userContext=React.createContext();   //creating a layer using context for accessing data
export default userContext;


export const UserProvider=({children})=>{  
    //setting value here using userprovider 
    //children is not a param its obj
    //uppercamel case important for provider
    let [userList,setUserList]=useState([]);
    return <userContext.Provider value={{userName:"sowmya",userList,setUserList}}>
        {children}
    </userContext.Provider>


}