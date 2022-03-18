import React from "react";
import { Admindash } from "./Component/Admin/Admindash";
import {LoginPage} from './Pages/LoginPage';
import { useLocalStorage } from "./Hooks/useStorage"

function App() {
  const [user, setuser] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem('userPassword');
    if(userData.length !== 0){
      setuser(true)
    }
  }, [])
  
  return (
    <>
     {user ? <Admindash/>: <LoginPage/> }  
  </>
  );
}

export default App;