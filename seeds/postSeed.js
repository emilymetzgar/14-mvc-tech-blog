const { Post } = require('../models');

const postData =

[
    {
        "name": "MVC",
        "description": "MVC is an architectural pattern that structures a codebase in three distinct sections, according to a software design philosophy known as the **separation of concerns**."
    },    
    {
        "name": "Object Relational Mapping",
        "description":" This makes these tasks more manageable by helping us to interact with databases using JavaScript."
    },
    {
        "name":"Express",
        "description":"Express is the most widely used Node.js server framework. It will allow us to quickly and easily establish our API routes and associated HTTP request methods."
    },
    {
        "name": "Server-Side APIs",
        "description": "One way the client can request this data is by using the Fetch Web API. The Fetch API can even request data from third-party APIs, like the OpenWeather API."      
    },
  ]
  
const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;