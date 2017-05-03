# talk_app
Demo app with API.AI, Node.js and Heroku.

 * At start, create small demo service with Node.js
    - Express service
    - Websocket service
    - Both are listening to same port
    - When user make POST request to Express, then it send request body to all Websocket clients
 * Then push it to git
 * Deploy to Heroku Cloud Platform
 * Create demo API.AI agent
 * Use deployed Node.js app in Heroku to create webhook in API.AI agent