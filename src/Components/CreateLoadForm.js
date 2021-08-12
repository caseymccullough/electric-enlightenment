import {useState, useContext} from "react";
import { DataContext } from '../App';
import { addLoad, getUser } from '../API/apiData';
import { selectedGridRowsCountSelector } from "@material-ui/data-grid";


export default function CreateLoadForm() {

  const {BASE_URL, currentUser, setLoads} = useContext(DataContext);

  const [formData, setFormData] = useState({
    name: "",
    wattage: "",
    standbyWattage: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const  submitClick = async (e) => {
    e.preventDefault(); 
    const updatedLoads = await addLoad (BASE_URL, currentUser.username, formData);
    
    console.log ("updated: ", updatedLoads)
    setLoads(updatedLoads)
    // // update user (and loads)
    // const updatedUser = await getUser();
    // await setCurrentUser(updatedUser);
  }

 return (
 
    <form onSubmit={submitClick} className="form" id="add-load-form">
     <h2>Submit New Load</h2>
       <label>
         Load: {" "}
         <input 
           type = "text" 
           id = "name"
           value={formData.name}
           onChange={handleChange}
           required
           ></input>
       </label>
       <br></br>
       <label>
         Wattage: {" "}
         <input 
           type = "number" 
           id = "wattage"
           value={formData.wattage}
           onChange={handleChange}
           required
           ></input>
       </label>
       <br></br>
       <label>
         Standby Wattage: {" "}
         <input 
           type = "number" 
           id = "standbyWattage"
           value={formData.standbyWattage}
           onChange={handleChange}
           ></input>
       </label>
       

       <br></br>
       <button type="submit"> Add Load</button>
     </form>
);
}