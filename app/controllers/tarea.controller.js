const db = require("../models");
const Tarea = db.tarea;
const Op = db.Sequelize.Op;


exports.findAll = (req, res) => {
    const titulo = req.query.titulo;
    var condition = titulo ? { titulo: { [Op.iLike]: `%${titulo}%` } } : null;

    Tarea.findAll({where: condition})
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something bad happened, it seems it was a server mistake jaja."
            });
        });
}

exports.create = (req, res) => {
    if (!req.body.titulo) {
        res.status(400).send({
            message: "Content can not be empty! You have to fill all the fields."
        });
        return;
    };

    const tarea = {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        estado: req.body.estado,
        responsable: req.body.responsable,
        fechaInicio: req.body.fechaInicio,
        fechaFin: req.body.fechaFin,
        fechaLimite: req.body.fechaLimite
    };



    Tarea.create(tarea)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Something bad happened while creating this man."
            });
        });
};

exports.update = (req,res) => {
    const id = req.params.id;

    Tarea.update (req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "The assignment was updated. :)"
            });
        } else {
            res.send({
                message: `Cannot update the assignment with id=${id}. Maybe the assignment was not created by the teacher.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error updating the assignment with id=" + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Tarea.destroy({
        where: {id:id}
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "The assignment was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete the assignment with id=${id}. Does the assignment exist? jajaja`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Could not delete the assignment with id=" + id
        });
    });
};
