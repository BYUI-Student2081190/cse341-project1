// Required Objects
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Routes
app.use("/", require("./routes"));

// Listening on port
app.listen(port, () => (console.log(`Runnning on port: ${port}`)));