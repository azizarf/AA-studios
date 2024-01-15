const studioRouter = require("express").Router();
const { create, getAll, getOne, update, deleteStudio } = require("../controllers/studio.Controller");

studioRouter.post("/add", create);
studioRouter.get("/", getAll);
studioRouter.get("/:id", getOne);
studioRouter.put("/:id", update);
studioRouter.delete("/:id", deleteStudio);

module.exports = studioRouter;