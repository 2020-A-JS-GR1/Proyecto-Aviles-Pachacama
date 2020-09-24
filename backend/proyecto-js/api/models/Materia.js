/**
 * Materia.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  datastore:'default', //nombre conexion
  tableName:'materia',//nombre tabla
  attributes: {
    nombremateria:{ // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      minLength: 10,
      maxLength: 25
    },
    //relaciones
    //materia-curso
    materias:{//uno a muchos(nombre en plural)
      collection:'Curso',//modelo a relacionarse
      via: 'materia' //Nombre atributo fk en el modelo relacional
    },
  },
};
