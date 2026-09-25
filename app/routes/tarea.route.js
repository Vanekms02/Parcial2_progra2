module.exports = app => {
    const tarea = require("../controllers/tarea.controller.js");
    var router = require("express").Router();

    router.get("/", tarea.findAll);
    router.post("/", tarea.create);
    router.put("/:id", tarea.update);
    router.delete("/:id", tarea.delete);

    app.use("/tareas", router);
};