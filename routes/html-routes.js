 // Dependencies

 var path = require("path");

 // Routes
 
 module.exports = function(app) {
 
 
 // ---------Below are templates for the routes and functions we will need. HTML path and route will need to be updated to our project
 // aimee 2/21/21------------------------------------
 
 
 
 
 
   // index route loads view.html
   app.get("/", function(req, res) {
     res.sendFile(path.join(__dirname, "../public/blog.html"));
   });
 
   // cms route loads cms.html
   app.get("/cms", function(req, res) {
     res.sendFile(path.join(__dirname, "../public/cms.html"));
   });
 
   // blog route loads blog.html
   app.get("/blog", function(req, res) {
     res.sendFile(path.join(__dirname, "../public/blog.html"));
   });
 
   // authors route loads author-manager.html
   app.get("/authors", function(req, res) {
     res.sendFile(path.join(__dirname, "../public/author-manager.html"));
   });
 
 };
 
   
 
 
 