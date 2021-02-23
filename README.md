# my-favorite-recipes-app



## Application Requirements

* Must use a Node and Express server

* Must use Handlebars.js as the template engine

* Must be backed by a MySQL database with a Sequelize ORM

* Must utilize both GET and POST routes for retrieving and adding new data

* Must be deployed using Heroku (with data)

* Must utilize at least one new library, package, or technology that we haven’t discussed

* Must have a polished front end/UI

* Must have a folder structure that meets the MVC paradigm

* Must meet good quality coding standards (indentation, scoping, naming)

* Must protect API keys in Node with environment variables


## Presentation Requirements

Use this [project presentation template](https://docs.google.com/presentation/d/1_u8TKy5zW5UlrVQVnyDEZ0unGI2tjQPDEpA0FNuBKAw/edit?usp=sharing) to address the following: 

* Elevator pitch: a one minute description of your application

* Concept: What is your user story? What was your motivation for development?

* Process: What were the technologies used? How were tasks and roles broken down and assigned? What challenges did you encounter? What were your successes?

* Demo: Show your stuff!

* Directions for Future Development

* Links to to the deployed application and the GitHub repository. Use this guide for [deploying your application to Heroku](../04-Important/GitHubHerokuConnect.md) if you need a reminder on how to deploy!


## Grading Metrics 

| Metric        | Weight | 
| ---           | ---    |
| Concept       | 10%    |
| Design        | 20%    |
| Functionality | 30%    |
| Collaboration | 30%    |
| Presentation  | 10%    |


## Submission on BCS

You are required to submit the following:

* The URL of the deployed application

* The URL of the GitHub repository


# Everyday Recipes App
> TBD general description.
 
## Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Live Link](#Live-Link)
* [Code Snippet](#code-snippet)
* [Sources](#sources)
* [Contact](#contact)

## General Info
TBD

## Technologies
* Javascript
* HTML/CSS
* JQuery
* Node
* NPM Express
* NPM Express-Handlebars
* NPM MySQL
* NPM Sequelize
* NPM Multer
* Heroku
* MySQL
* MySQL Workbench

## Live Link
[Live Link TBD](URL HERE)

## Code Snippets

TBD Code snippet:
```js
router.get("/", (req, res) => {
    burger.selectAll(function(data) {
        const hbsObject = {
            burgers: data
        };
        console.log('burger_controller console ', hbsObject);
        res.render("index", hbsObject);
    })
});
```

## Sources
Application enabled using the following sources:

* [NPM Express](https://www.npmjs.com/package/express)
* [NPM Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
* [NPM MySQL](https://www.npmjs.com/package/mysql)
* [NPM Sequelize](https://www.npmjs.com/package/sequelize)
* [NPM Multer](https://www.npmjs.com/package/multer)

## Contact
Created by Sam Rogers - feel free to contact me to collaborate on this project or any other project!

[LinkedIn](https://www.linkedin.com/in/samuelerogers/)

[Portfolio](https://samrogers15.github.io/Current_Portfolio/index.html)