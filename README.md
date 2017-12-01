
# EPLdashboard

EPLdashboard is an App that allows you to track key information about the English Premier League. Users can choose their favorite team and then add or subtract certain features from their dashboard. Features include fixtures, standings, and top scorers. Information is up to date and data is pulled from the StatsFC API.

The app also allows you to track games for your team. For those fans that like to keep track of key match events, the GameTracker function allows you to keep track of key events in the match and add any comments to jog their memory of the game when looking back later.

The deployed application is available at: https://kmlm.github.io/capstone-project/

The repository for the application's API is: https://github.com/kmlm/capstone-express-api

The deployed API is available at: https://hidden-beyond-66396.herokuapp.com/


![App Screen](https://i.imgur.com/YOyUenF.jpg)

## Technologies Used

This is a Single Page application using HTML, javascript, and handlebars. Ajax requests were made for API requests.


## User Stories

- A user will sign up and be automatically signed in
- After sign up, the user will choose a team that the dashboard will be based on
- The team will be posted to the team resource with the appropriate user ID
- If a user signs in and they have already chosen a favorite team, a get request will pull back the team information and they will be sent directly to their dashboard that is based on the team stored in the db
- As user can change their favorite team at any time and it will be sent as a patch request
- The user will be able to decide what options they want to display on their dashboard including upcoming fixtures, league standings, and current squad
- Aside from viewing the dashboard and adjusting what is displaying, the user will be able to use the game tracker feature.
- GameTracker allows a user to create a game that they are watching and then adding key events in the game. These events will include the minute the event happened and then the description of the event which could be: goals, shots, tackles, fouls, and cards.
- After the game is completed the game will be posted to the db and the user will be able to pull back any games.
- The user will be able to see all past games they have tracked.

## Future features

There are some features that I would like to add in the future. These include the ability to delete events from a tracked game, proper date conversion, including the ability for a user to tweet an event, and adding increased third-party functionality for passing back more team-specific data.

## Problem Solving Process

I tried to be methodical in the way I approached the application. I started by creating the HTML for the navbar, modals, dashboard, and GameTracker features. I then moved on to authentication features of sign up, sign in, change password, change team, and sign out.

I then moved on to the choose team feature. I wanted to ensure that a user could not see a dashboard until they chose a team so the code looks to see if the User has a favTeam in the database and if they do not have one on sign in they are redirected to the choose team page and are not able to see a dashaboard until they choose a team. Each time a user chooses a team, a PATCH request is sent to the API with the new favTeam. When a user clicks the change favorite team nav link a PATCH request of null is sent for favTeam, so that if they log out and log back in without choosing a new team, they are redirected to choose team. For the purpose of this project, favTeam was added to the User schema because I didn't see myself comparing different users' favorite teams.

When a user chooses a team they then see a dashboard that is at first empty. They can click the features they would like to see and that toggles shows and hides for divs for each feature. The features themselves are plugins from the third-party API StatsFC.

GameTracker took the bulk of the time on the project. I started using Rails for the API and then realized that Express would be a better option because of the structure of the data in the project. I started with creating and destoying a game, then moved on to editing the game details of date, home team, and away team. I finished by working on events. Events is an unfinished feature. Events can be added using a PATCH request to the specific game ID and passing in an array containing the new event plus any events that were already there. The issue came when subtracting events from a game. I used a filter function to pull out an array that did not include the event that was being subtracted. I sent a PATCH request to the game ID with this new array. This works each time until there is only one game left. At that point the filter returns an empty array. When I tried to send the PATCH request with that empty array, I consistently received 500 internal server errors. In the future I hope to resolve that. For now, a modal pops up on the delete event button click advising a user that the feature is coming soon. Another unresolved issue was date conversion from the API. I tried to write a date conversion function, but ran out of time to complete it. That is another problem that I would like to resolve.

This time around I ensured that hides and shows were appropriate after every new feature instead of trying to piece it all together at the end. This included adding hides to sign out for every additional feature added and ensuring appropriate transitions between dashboard, choose team, GameTracker, and landing page.

## Wireframes

- Landing Page: https://i.imgur.com/Yfz7BZP.jpg
- Dashboard: https://i.imgur.com/DnxdaFn.jpg
- GameTracker: https://i.imgur.com/HAPZpxT.jpg
