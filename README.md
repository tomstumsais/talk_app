# talk_app
Demo app with API.AI, Node.js, Cloud server and Google Home device.

 * At start, create small demo service with Node.js
    - Express service
    - Websocket service
    - Both are listening to same port
    - When user make POST request to Express, then it send request body to all Websocket clients
 * Then push it to git
 * Deploy to some Cloud Platform
 * Create demo API.AI agent
 * Use deployed Node.js app in Cloud to create webhook in API.AI agent

Demo in jsfiddle:
 * Talk app - https://jsfiddle.net/dp4jwjq6/10/
 * Web app - https://jsfiddle.net/wxgpy8xt/3/
 * Web service - https://travel-demo-iuqyeykxmi.now.sh/ (used https://zeit.co/)