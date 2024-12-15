const mongoose = require('mongose');

const userSchema = new mongoose.schema({
  username : {type :String , required : true , unique :true},
  password : {type :String , required :true}
})

module.export = mongoose.model('User' , userSchema);