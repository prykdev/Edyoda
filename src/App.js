import React from "react";
import { Login } from "./Component/Login/Login";
import { Admindash } from "./Component/Admin/Admindash";
import { useLocalStorage } from "./Hooks/useStorage"

function App() {
  const [userId,setUserId] = useLocalStorage('userId',"");
  return (
    <>
     {userId ? <Admindash/>: <Login login = {()=>setUserId('123')}/> }
    
  </>
  );
}

export default App;