const router = require("express").Router();

// Get Requests
router.get("/", (req, res) => {res.send("Hello World")});

module.exports = router;