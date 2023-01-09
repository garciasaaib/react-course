import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { HomeScreen } from "./screens/HomeScreen";
import { LoginScreen } from "./screens/LoginScreen";
import firebaseApp from "../firebase";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const auth = getAuth(firebaseApp);

function App() {
	const [usuarioGlobal, setUsuarioGlobal] = useState<User | null>(null);
	useEffect(() => {
    onAuthStateChanged(auth, (userFirebase) =>  {
      if (userFirebase) {
        // codigo de inicio de sesion
        setUsuarioGlobal(userFirebase)
      } else {
        // codigo en caso de no sesion
        setUsuarioGlobal(null)
      }
    })
  
  }, []);
  

	return (
		<div className="App">
			{usuarioGlobal ? <HomeScreen /> : <LoginScreen />}
		</div>
	);
}

export default App;
