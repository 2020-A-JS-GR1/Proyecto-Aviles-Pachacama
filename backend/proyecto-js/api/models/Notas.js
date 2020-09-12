/**
 * Notas.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {
  datastore:'default', //nombre conexion
  tableName:'notas',//nombre tabla
  attributes: {
    calificaciones:{ // nombre atributo
      type: 'number',
      required: true, // Por defecto es false
    },
    observaciones:{
      type: 'string',
      minLength: 25,
      required: false, // Por defecto es false
    },

    //relaciones
    // Notas- Usuario
    usuario:{ //nombre fk
      model: 'Usuario',//modelo con el cual relacionamos
      required: true, //Requerido 1 - N
      //false //opcional 0-N por defecto
    }

  },
};
