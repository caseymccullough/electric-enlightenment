import style from '../../styles.css';
import Chart from "react-google-charts";
import AreaChart from '../AreaChart/AreaChart';
import { useEffect, useState } from 'react';



export default function Results({loads, finalTime}) { // need finalTime to calculate kwh. 

   // for each load in the load array
   /* 
      1. generate time interval array.
      create array of intervals (one less than data points)
      identify value of each interval

*/

   const [pieChartData, setPieChartData] = useState([]);


   const populateKWH = () =>  {
      console.log ("calculating kwh");
      for (let i = 0; i < loads.length; i++){
         const kws = calcKWS(loads[i]);
         loads[i].kwh = kws / 3600;

      }

   }

   const calcKWS = (load) => {
      
      const startedOn = load.onOffData[0] > 0; // boolean result
      console.log (load.name, "started on = ", startedOn);
      console.log (load.onOffData);

      const intervals = getIntervals(load.onOffData);
      
      const evenSums = intervals.length > 0 ? sumEvenElements(intervals) : 0;
      const oddSums = intervals.length > 1 ? sumOddElements(intervals) : 0; // if there's no odd elements, it's sum is zero. 

      const kws = startedOn ? evenSums * load.wattage + oddSums * load.standbyWattage:
                              oddSums * load.wattage + evenSums * load.standbyWattage;
      
      return kws;

   }

   const sumEvenElements = arr => arr.filter((x, i) => !(i % 2)).reduce((a, b) => a + b);
   const sumOddElements = arr => arr.filter((x, i) => i % 2).reduce((a, b) => a + b);


   /* returns an array of time intervals from the simulation. */

   const getIntervals = (onOffData) =>{ 
      let times = onOffData.map(n => Math.abs(n));
      times.push(finalTime); // need final time to calculate kwh.
      console.log ("adjusted list of times ", times);
      return calcIntervals(times); 

   }




   const calcIntervals = (moments) => {
      const intervals = [];
      for (let i = 1; i < moments.length; i++ )
      {
         console.log (moments[i - 1], moments[i]);
         intervals.push((moments[i]) - (moments[i - 1]));
      }
      console.log ("intervals ", intervals);
      return intervals;
      
   }

   const prepPieChartData = () =>
   {
      let data = [['Load', 'kWh'],];

      console.log ("loads: ", loads);

      for (let i = 0; i < loads.length; i++)
      {
         const singleLoad = [loads[i].name, loads[i].kwh];
         console.log ("single load: ", singleLoad);
         data[i + 1] = singleLoad; // note zero element is already full w/ labels. 
      }
      console.log ("data in prepPieChartData ", data); 
      return data;
   }



   useEffect(() => {
      console.log("useEffect in effect");
      populateKWH();
      loads.forEach(load => console.log (load.name, " ", load.kwh));
      setPieChartData(prepPieChartData());
      console.log ("pie chart data: " + pieChartData);

   }, []);




   return (


      <div id="results">
         <h1>Results</h1>
         <div id="chart-container">
         
         <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data= {pieChartData}
            options={{
               title: 'Electricity Use',
               is3D: true,
            }}
            rootProps={{ 'data-testid': '1' }}
            />
            <AreaChart/>
         </div>
      </div> 
      )
   }