import { useThemeProps } from '@material-ui/data-grid';
import {Link} from 'react-router-dom';
import style from "./NavBar.css";

export default function NavBar({goToLogin, goToLoadProfile, goToSim, currentUser, goToResults}) {

   return (
      <div id="nav-container">
         <div id="nav-logo-container">
            <a href="https://www.freeiconspng.com/img/4558"><img src="https://www.freeiconspng.com/uploads/electric-icon-21.png" width="100" alt="electric icon" /></a>
         </div>
         <div id="nav-center-text">
            <h1 id="nav-name">Electric Enlightenment</h1>
            <h3>Changing the way you think about energy</h3>
         </div>
         <nav>
         
            <ul>
               {
                  currentUser === null ? 
                  <li onClick={goToLogin}>Login </li>:
                  <li> Your Profile </li>
               }
               <li onClick={goToLoadProfile}>Load Profile</li>
               <li onClick={goToSim}>Simulation</li>
               <li onClick={goToResults}>Results</li>

            </ul>
         </nav>
      </div>
      
   )

}