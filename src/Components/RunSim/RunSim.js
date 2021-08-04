
import style from '../../styles.css';

import {useState, useEffect} from "react";

import StopWatch from '../Stopwatch/Stopwatch';
import WattageMeter from '../WattageMeter/WattageMeter';
import DynamicLoadList from '../DynamicLoadList/DynamicLoadList';

export default function RunSim({loads, seeResultsPage, time, setTime, totalWattageHistory, setTotalWattageHistory}) {

   const [totalWattage, setTotalWattage] = useState(0);
   const [isActive, setIsActive] = useState(false);
   const [isComplete, setIsComplete] = useState(false);
   
   useEffect(() => {
                     setTotalWattage(calcTotalWattage(loads));
                  });
   
   const calcTotalWattage = () => {
      
      let sum = 0; 
      loads.forEach(load => {sum += load.currentWattage});
      return sum;
   }

   const endSimulation = () =>{

      console.log ("clicked end simulation");

      setIsComplete(true);
 

   }

   const handleStart = () => {

   }

   const handleReset = () => {
      
   }

   const pushOnOffReports = () => {
      console.log("pushOnOffReports called at: ", time);
      loads.forEach(load => issueOnOffReport(load));
   }

   const clearOnOffReports = () => {
      loads.forEach(load => load.onOffData = []);

   }

   const issueOnOffReport = (load) => { // negative means turned off
      
      /* work in here. */
      let timeStamp = [Math.abs(time)];
      loads.forEach(load => timeStamp.push (load.isOn ? load.wattage : load.standbyWattage));
      setTotalWattageHistory(...totalWattageHistory, timeStamp);

   }

   
 

   return (
      <div id="simulation">
         <div id="stopwatch-wattage-container">
            <StopWatch time = {time} setTime = {setTime} isActive = {isActive} setIsActive = {setIsActive} pushOnOffReports = {pushOnOffReports} clearOnOffReports = {clearOnOffReports}/>
            <WattageMeter totalWattage = {totalWattage} />
         </div>
         <DynamicLoadList loads = {loads} time = {time} issueOnOffReport = {issueOnOffReport}></DynamicLoadList>
         
         { isComplete ?
            <button id="see-results-btn"  onClick={seeResultsPage}>
            <h3>See Results</h3>
         </button> : 
         <button id="finish-sim-btn"  onClick={endSimulation}>
            <h3>End Simulation</h3>
         </button>
         }

      </div>
      
   )

}