const {Schema, SchemaTypes, model,} = require("mongoose");
const usersSchema = new Schema ({
 
  Id : {
    type: SchemaTypes.Number
  },
  
  Name: {
    type: SchemaTypes.String,
    required: true,
    
  },
  Email: {
    type: SchemaTypes.String,
    required: true,
    
  },
  Password: {
    type: SchemaTypes.String,
    required: true,
   
  },

  Contact: [{
    type: SchemaTypes.Number,
    required: true,
  }]



})


const user =new model ("user", usersSchema);

module.exports = user
