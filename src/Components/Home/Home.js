
import './Home.css';
import {useState} from "react";
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';

export default function Home({users, setCurrentUser, setLoads, goToLoadProfile}) {

   const [isNewUser, setIsNewUser] = useState(false);
   const toggleReg = () => {setIsNewUser(!isNewUser)};

   return (
      <div id="reg-login-container">
          
        {isNewUser ? <RegisterForm setCurrentUser = {setCurrentUser} goToLoadProfile = {goToLoadProfile}></RegisterForm>:
                      <LoginForm setCurrentUser = {setCurrentUser} setLoads = { setLoads } users = {users} goToLoadProfile = {goToLoadProfile}></LoginForm>
        }
        <button onClick={toggleReg}>{isNewUser ? "Click to Log In" : "Click to Register"}</button>

      </div>
   );
}

