/**
 * Curso.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {
  datastore:'default', //nombre conexion
  tableName:'curso',//nombre tabla
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
    },
    //relaciones
    // Curso- Usuario
    usuario:{ //nombre fk
      model: 'Usuario',//modelo con el cual relacionamos
      required: true, //Requerido 1 - N
      //false //opcional 0-N por defecto
    },
    //relaciones
    //curso-Notas
    cursos:{//uno a muchos(nombre en plural)
      collection:'Notas',//modelo a relacionarse
      via: 'curso' //Nombre atributo fk en el modelo relacional
    },
    //relaciones
    // curso-materia
    materia:{ //nombre fk
      model: 'Materia',//modelo con el cual relacionamos
      required: true, //Requerido 1 - N
      //false //opcional 0-N por defecto
    },
  },
};
