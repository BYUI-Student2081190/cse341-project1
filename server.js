/**   Required Objects   **/
const express = require('express');
const app = express();
const mongodb = require('./data/database');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;


/**  Middleware  **/
// Utilize body-parser
app.use(bodyParser.json());
// Allow Header Access Across Site
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-Width, Content-Type, Accept, Z-Key'
//     );
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     next();
// });


/**   Routes   **/
// Index file
app.use("/", require("./routes/"));


/**   Port   **/
// Port runs only if there is a successful connection to db
mongodb.initDb((error) => {
    if (error) {
        console.log(error)
    } else {
        app.listen(port, () => (console.log(`Connected to DB and runnning on port: ${port}`)));
    }
});