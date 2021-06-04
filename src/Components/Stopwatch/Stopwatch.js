
import React, { useState } from "react";
import '../../styles.css';
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";
  
function StopWatch({time, setTime, pushOnOffReports, clearOnOffReports, isActive, setIsActive}) {
  
  const [isPaused, setIsPaused] = useState(true);

  React.useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) { // add chance to end. 
      
      interval = setInterval(() => {
        setTime((time) => time + 10); // 10 millisecs
        //console.log ("time: ", time, "target: ", maxTimeMillisecs, "interval: ", interval);
      }, 10);
      

    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    pushOnOffReports();
     // each item will set at time (0:00 or -0:00)

  };
  
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  
  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    clearOnOffReports();
  };
  
  return (
    <div className="stop-watch">
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </div>
  );
}
  
export default StopWatch;