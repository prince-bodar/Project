const mongoose = require('mongoose');
const validator = require('validator');

const messageSchema = mongoose.Schema({
    firstname: {
        type: String,
        required:true,
    },
    lastname: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,
        validate:[validator.isEmail,"please Provide Valide E-mail"]
    },
    phoneNumber:{
        type:String,
        required:true,
        minLength:[11,"Enter valid mobile Number"],
        maxLength:[11,"Enter valid mobile Number"]
    },
    message:{
        type:String,
        required:true,
        minLength:[11,"Please Enter Must have 10 character"],
    }
},{
    versionKey: false
});


module.exports = mongoose.model("Message", messageSchema);