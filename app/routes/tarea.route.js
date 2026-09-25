module.exports = app => {
    const tarea = require("../controllers/tarea.controller.js");
    var router = require("express").Router();

    router.post("/create", tarea.create);
    router.put("/update/:id", tarea.update); 
    router.get("/getAll", tarea.findAll);
    router.delete("/delete/:id", tarea.delete);

    app.use("/api/homework", router);
};