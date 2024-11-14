/** Required Varibles **/
const routes = require("express").Router();


/** Routes **/
// Swagger file
routes.use("/", require("./swagger"));
// Users file
routes.use("/users", require("./users"));


/** GET Requests **/
routes.get("/", (req, res) => {
    //#swagger.tags=['Hello World']
    res.send("Hello World")});


/** Module Exports **/
module.exports = routes;