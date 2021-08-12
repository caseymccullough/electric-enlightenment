import { deleteLoadById } from "../../API/apiData";
export default function Load({load}) {

   const clickResponse = () => {
      deleteLoadById(load._id);
      
      // updateLoads()
   }
   


   return (      
         <tr className="load-row">
            <td><span className="del-button" onClick={clickResponse}>X</span></td><td>{load.name}</td><td>{load.wattage}</td><td>{load.standbyWattage}</td>
         </tr> 
   )

}