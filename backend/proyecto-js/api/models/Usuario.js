/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {
  datastore:'default', //nombre conexion
  tableName:'usuario',//nombre tabla
  attributes: {
    nombre:{ // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
      unique: true, // Por defecto es false
      minLength: 10,
      maxLength: 25
    },
    direccion:{
      type: 'string',
      minLength: 25,
      required: true, // Por defecto es false
    },
    telefono:{
      type: 'string',
      minLength: 10,
      required: true, // Por defecto es false
    },
    correo:{
      type: 'string',
      isEmail: true // Por defecto es false
    },
    contrasenia:{
      type: 'string',
      minLength:8,
      required: true
    },
    //relaciones
    //usuario-Notas
    notas:{//uno a muchos(nombre en plural)
      collection:'Notas',//modelo a relacionarse
      via: 'usuario' //Nombre atributo fk en el modelo relacional
    }
  },
};
