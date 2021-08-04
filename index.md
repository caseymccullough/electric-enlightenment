# Electric Enlightenment

[Try the App!](https://electric-sage.herokuapp.com/)

This application simulates the collection of real-time electricity use information for a household or business. The user has an opportunity to enter all relevant loads (along with wattages and standby wattages). Then, he/ she can run a clock that keeps track of electricity use as the user turns those appliances on and off over the span of a (simulated) day or days. 

## Technologies Used: 

React, JavaScript, HTML, CSS, Node.js, MongoDB, Express, [Google Charts Library](https://maps.googleapis.com/maps/api/geocode/json)

## Getting Started: 

<img src="https://user-images.githubusercontent.com/11179812/128203357-807f0b47-aea1-464a-99ee-c82d55cdae6c.png" width="70%" height="70%" />

1. Enter a username, login, and zip code. 
2. Click the Register button to create a new account.
                                                                                                                                     
<img src="https://user-images.githubusercontent.com/11179812/128204087-65e52e22-7c0e-4a61-ba7d-6dff0ec378da.png" width="70%" height="70%" />

3. The Load List will be populated with your previously-entered loads (NOTE: for the moment, there is a single list of loads that is "shared" by all users. Once I resolve password / auth issues, then your individual load list will save to your account.
4. Use the "Submit New Load" tool to add any new loads prior to the simulation.  
5. To remove a load, click on the red X that appears to the left of each listed load. 
6. Click the Run Simulation Button when your list is complete. 

<img src="https://user-images.githubusercontent.com/11179812/128206092-cd135441-859d-4bc2-8cea-45c274980764.png" width="70%" height="70%" />

5. On the Simulation Page you will see the Timer, Total Wattage, and the Load List. Click the red start button to begin the simulation. 
6. Once the Timer has started, turn loads on / off by with a click. 

<img src="https://user-images.githubusercontent.com/11179812/128206983-422f1b62-213a-4630-a93c-90d0e2896406.png" width="70%" height="70%" />

7. Once you have run the simulation for the desired amount of time, click the Pause Button. 
8. Click the green End Simulation Button at the bottom of the screen.
9. Click the See Results Button to move to the Results screen.

<img src="https://user-images.githubusercontent.com/11179812/128207833-69d6435b-0664-4530-9d5a-760c012de8e5.png" width="70%" height="70%" />

10. The Results page shows a pie chart breaking down total electricity use over the simulated time period by load. It also shows a stacked line chart that shows total electricity use over time (broken down by appliance). Note that at this time, the stacked line chart is using canned data. 


## Unsolved Problems: 

Under System Information the pull-down menus continue to show their original labels even after a selection has been made, making it difficult for a user to know if his/ her selection has registered. 

![image](https://user-images.githubusercontent.com/11179812/127494604-d101a696-13db-47a4-a75b-4d33cb75b294.png)


## Future Enhancements: 

First, I want to make the aesthetic of the system info data confirmation / entry more in line with that of the NREL page. 

Secondly, I want to adjust the map, which currently bleeds off the screen a bit. I'd also like to change the label to the address entered by the user (currently it says "Location"). 

Currently the user must hit a button on the Submit Data page to validate all data (thus triggering a call to the PVWatts API). This is different to all previous navigation which takes place through the navigation arrows on the right and left side of the screen. A better solution will automatically make the API call when the user clicks the arrow that advances him / her to the Results page, eliminating the need for the button. 

The actual PVWatts app has a nice display at the top of the page that shows all required steps towards the completion of the analysis. In a future version I would like to replicate this. 

![image](https://user-images.githubusercontent.com/11179812/127490311-8860f570-8363-4f93-99c3-30e60f4be933.png)

Similarly, the NREL site's navigation arrows offer information about the destination to which they will take the user. 

![image](https://user-images.githubusercontent.com/11179812/127490704-a0722c53-0459-4d5f-b089-4a4bef3c3ee2.png)

Finally, my site does not tap into NREL's database of retail electricity prices (as does PVWatts). I'd like to add a call to this NREL API, which would offer users an electricity price based on their region. 



