# Electric Enlightenment

[Try the App!](https://electric-sage.herokuapp.com/)

This application simulates the collection of real-time electricity use information for a household or business. The user has an opportunity to enter all relevant loads (along with wattages and standby wattages). Then, he/ she can run a clock that keeps track of electricity use as the user turns those appliances on and off over the span of a (simulated) day or days. 

## Technologies Used: 

React, JavaScript, HTML, CSS, Node.js, MongoDB, Express, [Google Charts Library](https://maps.googleapis.com/maps/api/geocode/json)

## Getting Started: 

<img src="https://user-images.githubusercontent.com/11179812/128203357-807f0b47-aea1-464a-99ee-c82d55cdae6c.png" width="50%" height="50%" />

1. Enter a username, login, and zip code. 
2. Click the Register button to create a new account.
                                                                                                                                     
<img src="https://user-images.githubusercontent.com/11179812/128204087-65e52e22-7c0e-4a61-ba7d-6dff0ec378da.png" width="50%" height="50%" />

3. The Load List will be populated with your previously-entered loads (NOTE: for the moment, there is a single list of loads that is "shared" by all users. Once I resolve password / auth issues, then your individual load list will save to your account.
4. Use the "Submit New Load" tool to add any new loads prior to the simulation.  
5. To remove a load, click on the red X that appears to the left of each listed load. 
6. Click the Run Simulation Button when your list is complete. 

<img src="https://user-images.githubusercontent.com/11179812/128205199-c13bcb76-cdad-4ed9-86f6-d60c26c7c116.png" width="50%" height="50% />
                                                                                                                                     
![Screen Shot 2021-08-04 at 11 09 57 AM](https://user-images.githubusercontent.com/11179812/128206092-cd135441-859d-4bc2-8cea-45c274980764.png)


5. Change the form as needed to describe the system planned for the given location. 
6. Click the right arrow to move to the Data Summary page. 

<img src="https://user-images.githubusercontent.com/11179812/127501585-62cbc404-4989-46a1-98fb-970279bdeb95.png" width="50%" height="50%" />

7. Confirm that all data is correct. If it requires adjustment, you can click the back arrows to go back and revise your numbers. 
8. Once all values are correct, click the "Submit Data" button. 
9. Click the right arrow to go to the Results page. 

<img src="https://user-images.githubusercontent.com/11179812/127502066-34e0b4e0-7a01-47ce-901e-f533de92a994.png" width="50%" height="50%" />

10. The Results page shows a month-by-month assessment of historical solar radiation figures, expected energy output, and the value of that output for a given electricity cost. It also has annual totals at the bottom of the table. 

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



