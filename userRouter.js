const { Router } = require("express");
const usersController = require("../restAPI/userController");
const userRouter = Router();

userRouter.route("/")
  .post(usersController.Create)
  .get(usersController.getAll);
userRouter.route("/:id")
  .get(usersController.getById)
  .put(usersController.Update)
  .delete(usersController.Delete);

module.exports = userRouter