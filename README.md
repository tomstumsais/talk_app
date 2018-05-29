# Travel Talk App

Travel Talk app is built with [Dialogflow (previous API.AI)](https://dialogflow.com/), Node.js, Cloud server and Google Home device. This is a PoC app, goal was to create web app which is connected with Google Home. User can talk with Google Assistant which is added in Google Home. Say "Hey, Google!" and then where you want to travel and Google Assistant will take your response and depending on it, show your travel destination in web browser where is opened web app with Google Map.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Need a running Node.js and npm, Dialogflow account and Google Home device.

### Installing

* install [Node & npm](https://nodejs.org/en/)
* go to project root directory ./
* run `npm install` to install dependencies
* go to ./server directory
* start the server `node http-server.js`
* go to ./web_app directory
* launch `index.html` file in a web browser
* setup Google Home with Google Assistant which is built with Dialogflow
* check if web service is correctly added to Google Assistant like webhook
* now you are ready to play with it!

**WARNING** At the moment this current source code version could not work properly and could need to fix it. That's because Dialogflow was previously API.AI and there were made changes to this API in this time. Last time when I ran this app was May 2017.

## Steps how I built it

* Createed small demo service with Node.js
    - Express service
    - Websocket service
    - Both are listening to same port
    - When user make POST request to Express (in this case user say travel destination, Google Home take it and make POST request to service), then it send request body to all Websocket clients
 * Then pushed it to git
 * Deployed to some Cloud Platform (I used [Now](https://zeit.co/now))
 * Createed demo [Dialogflow](https://dialogflow.com/) agent
 * Used deployed Node.js app in Cloud to create webhook in Dialogflow agent

Demo in jsfiddle:
 * Talk app - https://jsfiddle.net/dp4jwjq6/10/
 * Web app - https://jsfiddle.net/wxgpy8xt/3/
 * Web service - https://travel-demo-iuqyeykxmi.now.sh/ (used https://zeit.co/)

## Contributing

Right now I am not doing any development for this project, but feel free to contact me if you have any ideas, suggestions, questions or anything else.

## Authors

* [Toms Tumshais](https://github.com/tomstumshais)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
