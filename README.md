# Talk app

Travel talk app with [Dialogflow (previous API.AI)](https://dialogflow.com/), Node.js, Cloud server and Google Home device. This is a PoC app, goal was to create web app which is connected with Google Home. User can talk with Google Assistant which is added in Google Home. Say "Hey, Google!" and then where you want to travel and Google Assistant will take your response and depending on it, show your travel destination in web browser where is opened web app with Google Map.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Deployment

Add additional notes about how to deploy this on a live system

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
