const prodRouter = require("express").Router();
const { create, getAll, getOne, update, deleteProd } = require("../controllers/prod.Controller");

prodRouter.post("/add", create);
prodRouter.get("/", getAll);
prodRouter.get("/:id", getOne);
prodRouter.put("/:id", update);
prodRouter.delete("/:id", deleteProd);

module.exports = prodRouter;