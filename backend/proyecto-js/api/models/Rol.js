/**
 * Rol.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {
  datastore:'default', //nombre conexion
  tableName:'rol',//nombre tabla
  attributes: {
    tiporol:{ // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
    },
    //relaciones
    //rol-usuario
    roles:{//uno a muchos(nombre en plural)
      collection:'Usuario',//modelo a relacionarse
      via: 'rol' //Nombre atributo fk en el modelo relacional
    },
  },
};

