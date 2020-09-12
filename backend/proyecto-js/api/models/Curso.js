/**
 * Curso.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {
  datastore:'default', //nombre conexion
  tableName:'usuario',//nombre tabla
  attributes: {
    nombrecurso:{ // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      minLength: 10,
      maxLength: 25
    },
    fechainicio:{
      type: 'string',
      required: true,

    },
    fechafin:{
      type: 'string',
      required: true,
    }


  },
};
