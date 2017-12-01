
# EPLdashboard

EPLdashboard is an App that allows you to track key information about the English Premier League. Users can choose their favorite team and then add or subtract certain features from their dashboard. Features include fixtures, standings, and top scorers. Information is up to date and data is pulled from the StatsFC API.

The app also allows you to track games for your team. For those fans that like to keep track of key match events, the GameTracker function allows you to keep track of key events in the match and add any comments to jog their memory of the game when looking back later.

The deployed application is available at: https://kmlm.github.io/capstone-project/

The repository for the application's API is: https://github.com/kmlm/capstone-express-api


![App Screen](https://i.imgur.com/YOyUenF.jpg)

## Technologies Used

This is a Single Page application using HTML, javascript, and handlebars used. Ajax requests were made for API calls.


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

There are some features that will be added in the future. These include the ability to delete from a tracked game,


## Problem Solving Process


## Wireframes
