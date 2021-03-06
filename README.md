# Everyday Recipes App
- Cooking can be an incredible experience but it can also be incredibly frustrating. Surfing through old cookbooks with stained hard to read recipe cards can be exhausting and take all the joy out of the kitchen. This was the issue posed to me by my partner, Kelsey. She wanted a way to store and access her favorite recipes in a one stop location. Enter Everyday Recipes, an easy to use recipe app that allows a user to add, store, edit, delete, the recipes they love.  The app is designed, tried and tested by developers and users alike who are every day at home cooks.
 
## Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Live Link](#Live-Link)
* [Code Snippet](#code-snippet)
* [Sources](#sources)
* [Contact](#contact)

## General Info
This appliction implements the following:

* Uses a Node and Express server

* Backed by a MySQL database with a Sequelize ORM

* Utilizes both GET and POST routes for retrieving and adding new data

* Deployed using Heroku (with data)

* Utilizes at least one new library, package, or technology that we haven’t discussed

* Has a polished front end/UI

* Has have a folder structure that meets the MVC paradigm

* Meet good quality coding standards (indentation, scoping, naming)

* Protects API keys in Node with environment variables

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
- [Heroku](https://my-favorite-recipes-app-portla.herokuapp.com/)

## Github
- [Github Repo](https://github.com/jinxdoll/my-favorite-recipes-app)

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
* [NPM Passport](https://www.npmjs.com/package/passport)
* [NPM Bcrypt](https://www.npmjs.com/package/bcryptjs)  

## Authors
Created by Sam Rogers, Aimee Mattson, & Josh Rehanek - feel free to contact us to collaborate on this project or any other project!

[LinkedIn](https://www.linkedin.com/in/samuelerogers/)
[LinkedIn](https://www.linkedin.com/in/joshua-rehanek/)
[LinkedIn](https://www.linkedin.com/in/aimee-mattson-bb060398/)

[Portfolio](https://samrogers15.github.io/Current_Portfolio/index.html)
[Portfolio](https://joshrehanek.github.io/my-portfolio/)
[Portfolio](https://jinxdoll.github.io/HW-2-portfolio-mattsonaimee/)