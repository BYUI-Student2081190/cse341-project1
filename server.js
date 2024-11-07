/**   Required Objects   **/
const express = require('express');
const app = express();
const mongodb = require('./data/database');

const port = process.env.PORT || 3000;


/**   Routes   **/
// Index file
app.use("/", require("./routes/"));
// Users file
app.use("/users", require("./routes/users"));


/**   Port   **/
// Port runs only if there is a successful connection to db
mongodb.initDb((error) => {
    if (error) {
        console.log(error)
    } else {
        app.listen(port, () => (console.log(`Connected to DB and runnning on port: ${port}`)));
    }
});