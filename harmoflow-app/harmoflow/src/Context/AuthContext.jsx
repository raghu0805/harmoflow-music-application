import { doc, getDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { __AUTH, __DB } from "../firebaseConfig/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export let AuthContext=createContext();

let AuthProvider=({children})=>{
  let [userinformation,setUserInformation]=useState(null)
  let data_notes="raghu is my friend";
  useEffect(()=>{
    const auth=getAuth();
    onAuthStateChanged(auth,(user)=>{
      console.log("userdata:",user);
      setUserInformation(user);
    })
  },[])





  return <AuthContext.Provider value={{data_notes,userinformation}}>
    {children}
  </AuthContext.Provider>
}

export default AuthProvider


