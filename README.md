## Steps to run a local version of this app:
Step 1: clone the repo<br>
Step 2: open the application files in vscode and start a new terminal<br>
Step 3: type `npm install` and click Enter -> this will install all dependencies required to prepare the app for `Step 4`<br>
Step 4: once `Step 3` is complete, type `npm start` and click Enter -> this opens up a development server ([http://localhost:3000] by default) to serve the app<br>
Step 5 (optional): Open http://localhost:3000 to view it in your browser -> incase the browser doesn't load automatically, or in case the tab is accidently closed. :))

## Assumptions made:
- Assumed that the alarm will be reset if the user reloads the application. 
    - Resetting the app sets the alarm off again, and adjusts the 'next alarm' duration
- Assumed that the instruction that stated "The App shows how long it will be until the next alert." was referring to the duration in hh : mm : ss until the next alarm instead of the timestamp for the next alarm
- The files have been divided to handle different tasks within the app (handling rendering of UI elements, responding to changes, etc.) to illustrate the MVC as closely as possible without overly complicating the code structure
- An initial mockup of the app (created using excalidraw) has been included in the email sent for submission

## MVC pattern:
Model : (representing the business logic) -> the logic for alarm & time-related data has been implemented in the AlarmManager.js file. This file manages business logic, representing the 'Model' for the MVC pattern.

View : (representing the UI components for the app) -> DisplayTimeZone.js, DisplayClockAngle.js, and DisplayFibClock.js serve as components for the 'View' elements of the MVC pattern, as they render the app data to the user

Controller: (manages the interaction between the Model and the View) -> handles user interactions (i.e. when user starts app, reloads app, turns off the alarm, etc.) and updates the View components based on changes in Model's elements
