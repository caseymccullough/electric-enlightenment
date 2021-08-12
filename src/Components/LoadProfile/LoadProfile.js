
import CreateLoadForm from '../CreateLoadForm';
import LoadList from '../LoadList/LoadList';

export default function LoadProfile( {loads, setLoads, goToSim} ) {

   return (
      <div id="load-profile">
         <div id= "list-and-form">
            <div id="load-list-container" >
             
               <LoadList loads={ loads} setLoads={setLoads} />
               <button id="run-sim-btn" onClick={goToSim}>
                  Run Simulation
               </button> 
            </div>
            
            <CreateLoadForm setLoads={ setLoads }/>
         </div>
      </div>
       
      
   )




}