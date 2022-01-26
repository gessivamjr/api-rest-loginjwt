const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {type:String, required: true, maxlength: 15},
    lastname: {type:String, required: true, maxlength: 15},
    password: {type:String, required: true, minlength: 6},
    email: {type:String, required: true},
    admin: {type:Boolean, default: false},
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model("user", userSchema);