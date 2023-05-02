const mongoose = require('mongoose');

const schema = mongoose.Schema;

const productSchema = new schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  userId: {
    type: schema.Types.ObjectId,
    ref: 'User',  // we refer to the user model here(use same name as model)
    required: true
  }
});

// we will export a model here.
// it connects a schema to a name (of model) => product 
module.exports = mongoose.model('Product', productSchema);

// /**
//  * like sequelize(ORM) for SQL db(Relational DB), we have mongoose
//  * ORM - Object Relational Mapping
//  * it enables us to work with data rather than focusing our efforts on writing querys.
//  * 
//  * mongoose is ODM Library for MongoDB.
//  *  ODM - Object Document Mapping
//  * 
//  * MongoDB - document database so we have a ODM.
//  * 
//  * we a object here in JS
//  * we want to map it to a document and save it in a collection.
//  * we can write queries for that like we did in day 7 on our own
//  * but we want to focus on object or data and want to work with it
//  * rather than wasting our time writing complex queries
//  * 
//  * allow us to define schema and models - what data should look like
//  * we then make instances - real JS object based off these models(blueprints)
//  * we can now write queries
//  * we use objects and models to query the DB
//  * we use mongoose which adds syntactical sugar to make our work easier!
//  * 
//  */