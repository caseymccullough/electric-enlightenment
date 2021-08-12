import './styles.css';

import React, {useState, createContext} from "react";

import LoadProfile from './Components/LoadProfile/LoadProfile';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import RunSim from './Components/RunSim/RunSim';
import Results from './Components/Results/Results';

export const DataContext = createContext()

export default function App() {

  //const BASE_URL = 'https://codelockr-api.herokuapp.com'
	const BASE_URL = 'http://localhost:8800'

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [showLoadProfile, setShowLoadProfile] = useState(false);
  const [showSim, setShowSim] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const [currentUser, setCurrentUser] = useState(null);
  const [loads, setLoads] = useState([]);
  const [time, setTime] = useState(0);
  
  const [totalWattageHistory, setTotalWattageHistory] = useState([]);

  const closeAllPages = () =>
  {
    setShowHome(false);
    setShowLoadProfile(false);
    setShowSim(false);
    setShowResults(false);
  }
  const goToLoadProfile = () =>
  {
    closeAllPages();
    setShowLoadProfile(true);
  }

  const goToSim = () =>
  {
    closeAllPages();
    setShowSim(true);
  }

  const goToResults = () =>{
    closeAllPages();
    setShowResults(true);
  }

  const goToLogin = () => {

  }

	const handleLogout = () => {
		window.localStorage.clear()
	
	}




// useEffect (() => {
//   getUser();
//   getLoads();
// }, []
// );

  return (
  
    <div className="App">
      <DataContext.Provider value={{BASE_URL, setLoggedIn, currentUser, setCurrentUser, setLoads}}>
      
      <NavBar goToLogin = {goToLogin} goToLoadProfile = {goToLoadProfile} goToSim = {goToSim} goToResults = {goToResults} currentUser = {currentUser}></NavBar> 
        <main>
            {showHome ? <Home currentUser={currentUser} setCurrentUser = {setCurrentUser} goToLoadProfile ={goToLoadProfile} setLoads={setLoads}/> : <br></br>}
            {showLoadProfile ? <LoadProfile  currentUser = {currentUser} setCurrentUser= {setCurrentUser} loads = {loads}  setLoads={ setLoads } goToSim = {goToSim}/> : 
            <div/>}  {/*empty do-nothing tag */}
            {showSim ?  <RunSim loads = {loads}  time = {time} setTime = {setTime} seeResultsPage = {goToResults} totalWattageHistory = {totalWattageHistory} setTotalWattageHistory = {setTotalWattageHistory}></RunSim> 
              : <div/>}  {/*empty do-nothing tag */}
            {showResults ? <Results loads = {loads} finalTime = {time}></Results> 
              : <div/>}  {/*empty do-nothing tag */}
          </main>
        </DataContext.Provider>
    </div>    
  );
}


