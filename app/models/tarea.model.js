module.exports = (sequelize, Sequelize) => {
    const Tarea = sequelize.define("tarea", {
        titulo: {
            type: Sequelize.STRING
        },
        descripcion:{
            type: Sequelize.STRING
        },
        estado: {
            type: Sequelize.STRING
        },     
        responsable: {
            type: Sequelize.STRING 
        },
        fechaInicio: {
            type: Sequelize.DATE
        },
        fechaFin: {
            type: Sequelize.DATE
        },
        fechaLimite: {
            type: Sequelize.DATE
        }
    });
    return Tarea;
}