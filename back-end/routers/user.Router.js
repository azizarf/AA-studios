
const userRouter = require("express").Router();
const { create, getAll, getOne, update, deleteUser } = require("../controllers/user.controller");

userRouter.post("/add", create);
userRouter.get("/", getAll);
userRouter.get("/:id", getOne);
userRouter.put("/:id", update);
userRouter.delete("/:id", deleteUser);

module.exports = userRouter;