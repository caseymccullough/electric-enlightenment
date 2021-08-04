
import LoadBasicsForm from '../LoadBasicsForm';
import LoadList from '../LoadList/LoadList';


export default function LoadProfile( {currentUser, loads, getLoads, goToSim, setLoads} ) {

   return (
      <div id="load-profile">
         <div id= "list-and-form">
            <div id="load-list-container" >
             
               <LoadList loads = {loads} setLoads={setLoads} getLoads={getLoads} ></LoadList>
               <button id="run-sim-btn" onClick={goToSim}>
                  Run Simulation
               </button> 
            </div>
            
            <LoadBasicsForm currentUser = {currentUser} getLoads = {getLoads}></LoadBasicsForm>
         </div>
      </div>
       
      
   )




}