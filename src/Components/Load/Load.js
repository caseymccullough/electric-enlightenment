
export default function Load({load, getLoads}) {

   const clickResponse = () => {
     console.log ("to be deleted");
      console.log (load._id);
      console.log (load.name);
      deleteById(load._id);
      getLoads(); 
   }
   
   const deleteById = async (id) => {
      try {
        console.log ("inside delete load : " + id);
        const response = await fetch(`https://electric-sage-api.herokuapp.com/load/${id}`, {
          method: "DELETE", 
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await response.json(); // <== deleted load
       

      } catch (err) {
        console.log(err);
      } finally {
        await getLoads(); 
    }
    }

   return (
      
         <tr className="load-row">
            <td><span className="del-button" onClick={clickResponse}>X</span></td><td>{load.name}</td><td>{load.wattage}</td><td>{load.standbyWattage}</td>
         </tr>
     
      
   )

}