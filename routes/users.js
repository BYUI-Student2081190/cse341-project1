const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users-controller");

/**   Get Routes   **/
router.get("/", usersController.getAll);

router.get("/:id", usersController.getById);

router.post("/", usersController.createUser);

router.put("/:id", usersController.updateUser);

router.delete("/:id", usersController.deleteUser);


module.exports = router;