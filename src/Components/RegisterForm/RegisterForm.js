import  '../../styles.css';
import {useState, useContext} from "react";
import { useHistory } from 'react-router';
import { createUser } from '../../API/apiData.js'
import { DataContext } from '../../App';


export default function RegisterForm(props) {
  
  const history = useHistory()
  const {BASE_URL} = useContext(DataContext);

  const [userFormData, setUserFormData] = useState({
      username: "",
      password: ""
  });

   const handleChange = (event)=> {
     setUserFormData({ ...userFormData, [event.target.name]: event.target.value});
     console.log(event.target.name + ": " + event.target.value);
   }

  const handleSubmit = async () => {
    const newUser = await createUser(BASE_URL, userFormData )
    if(newUser.error) {
      console.log (`That ${newUser.error} is already taken`) // error should list whatever feature is limiting
    }
    else {
      const { token, createdUser} = newUser;
      window.localStorage.setItem("token", token);
      window.localStorage.setItem("username", createdUser.username);

    }
    // shift the scene . . .
    props.setShowHome(false);
    props.setShowLoadProfile(true);
  }
 
 return (
   <div id="registration-page" className="form">
     <h1>Registration Form</h1>

     <form id="registration-form" onSubmit={createUser}>
       <label>
         Username
         <input 
           type = "text" 
           name="username"
           placeholder = "username"
           value={userFormData.username} 
           onChange={handleChange}
           ></input>
       </label>
       <br></br>
       <label>
         Password
         <input type="text" 
         name="password"
         placeholder = "password"
         value={userFormData.password}
         onChange={handleChange}
         ></input>
       </label>
       <br></br>
       
       <button onClick={handleSubmit}>Register</button>
     </form>
 </div>
);
}