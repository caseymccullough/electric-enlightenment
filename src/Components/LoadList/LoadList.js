import Load from '../Load/Load';
import  '../../styles.css';
import { useContext } from 'react';
import { DataContext } from '../../App';

import { getUserLoads } from '../../API/apiData'

export default function LoadList({loads = []}) {

   const {BASE_URL, currentUser, setCurrentUser} = useContext(DataContext);




   return (    

            <table id="loads-table">
               <thead>
                  <tr>
                     <th></th>
                     <th>Load</th>
                     <th>Wattage</th>
                     <th>Standby</th>
                  </tr>
               </thead>
         
               <tbody>
                     {loads.map((load, i) => <Load load = {load} key= {i}></Load>)}
               </tbody> 
         
               
            </table>
      
   )

}


/*

 import Load from '../Load/Load';

import { DataGrid } from '@material-ui/data-grid';
import {useState, useEffect} from "react";

export default function LoadList({loads}) {
  
   const columns = [
      { field: 'load', headerName: 'Load', width: 150 },
      { field: 'wattage', headerName: 'Wattage', width: 150 },
      { field: 'standbyWattage', headerName: 'Standby', width: 150 },
      { field: 'dailyUseHours', headerName: 'Daily Use (h)', width: 150 },
    ]; 

    const [rows, setRows] = useState([]);
    
    //set rows w/ value of loads
    //setRows(loads);
 

   /*.map((load, i) => 
         "id: ", {i}, "col1: ", {load.name}, ", col2:", {load.wattage} 
      );
      


      setRows( [ { name: "name", wattage: 'wattage', standbyWattage: 'standby', dailyUseHours: 'daily' },
      { name: "fan", wattage: '12', standbyWattage: '2', dailyUseHours: '4' }
   
   ]);



  
      return (
      <div id="loads-table">
         <div style={{ height: 300, width: '100%' }}>
            <DataGrid className = "grid-style" rows={rows} columns={columns} />
         </div>
      </div>
      
   )

}
*/