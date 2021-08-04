import "./DynamicLoad.css";

export default function DynamicLoad({load, time }) {
   
   const toggleOnSwitch = () => {
      load.isOn = (!load.isOn);
      load.isOn ? issueOnOffReport(time): issueOnOffReport(-time);
   }

   const clearOnOffData = () => /* move this up a level */
   {
      load.onOffData = [];
   }

   const turnOff = () => {
      if(load.isOn){
         toggleOnSwitch();
      }
   }

   const handleClick = () => {
      console.log('handle click');
      toggleOnSwitch();
      load.currentWattage = load.isOn ? load.wattage: load.standbyWattage; 
   }

   const issueOnOffReport = (timeSignal) => { // negative means turned off

      load.onOffData.push(timeSignal);
      console.log (load.onOffData);
   }
   

   return (
      
         <tr className={load.isOn ? 'clickable-load load-on' : 'clickable-load load-off'} onClick={handleClick}>
            <td>{load.name}</td>
            <td>{load.wattage}</td>
            <td>{load.standbyWattage}</td>
            <td className="on-off-id">{load.isOn ? 'ON' : 'OFF'}</td>
            <td className="current-wattage">{load.currentWattage }</td>
            
         </tr>
     
      
   )

}