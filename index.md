# Electric Enlightenment

[Try the App!](https://electric-sage.herokuapp.com/)

This application simulates the collection of real-time electricity use information for a household or business. The user has an opportunity to enter all relevant loads (along with wattages and standby wattages). Then, he/ she can run a clock that keeps track of electricity use as the user turns those appliances on and off over the span of a (simulated) day or days. 

## Technologies Used: 

React, JavaScript, HTML, CSS, Node.js, MongoDB, Express, [Google Charts Library](https://maps.googleapis.com/maps/api/geocode/json)

## Getting Started: 

![Screen Shot 2021-08-04 at 10 50 18 AM](https://user-images.githubusercontent.com/11179812/128202801-5f69c0ad-6106-45e7-a02a-fc77d17ea12f.png)
![Screen Shot 2021-08-04 at 10 50 18 AM (2)](https://user-images.githubusercontent.com/11179812/128202805-18e586d5-4a99-44df-b880-c1aa9338736f.png)


<img src="https://user-images.githubusercontent.com/11179812/127500409-9541e2d9-f75d-480c-8201-e4f4df2ab2f8.png" width="50%" height="50%" />
1. Enter the address for the property in question in the search bar at the top of the page. 
2. Click on the right arrow, to move to the Solar Resource Data page. 

<img src="https://user-images.githubusercontent.com/11179812/127501075-66b13e7b-8114-49c4-8ce8-58015fbb404f.png" width="50%" height="50%" />

3. The Solar Resource Data page will show the lat/ long associated with the given address, as well as a map of the location. Confirm that this is the correct location and enter the price of electricity in the region of interest. 
4. Click the right arrow to move to the System Information page. 

<img src="https://user-images.githubusercontent.com/11179812/127501303-b5b6932e-d624-44af-aadf-f2521a485475.png" width="50%" height="50%" />

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



