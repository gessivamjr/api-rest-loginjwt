const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {registerValidate, loginValidate} = require("./validate");

const userController = {
    register: async function (req, res){
        
        const {error} = registerValidate(req.body);
        if(error){
            return res.status(400).send(error.message)
        }

        const verifyUserEmail = await User.findOne({email: req.body.email});
        if(verifyUserEmail){
            return res.status(400).send("Email already exists");
        }
        const user = new User({
            name: req.body.name,
            lastname: req.body.lastname,
            password: bcrypt.hashSync(req.body.password),
            email: req.body.email
        });
        try{
            const savedUser = await user.save();
            res.send(savedUser);
        }catch(error){
            res.status(400).send(error);
        }
    },
    login: async function (req, res){

        const {error} = loginValidate(req.body);
        if(error){
            return res.status(400).send(error.message)
        }

        const verifyUser = await User.findOne({email: req.body.email});
        if(!verifyUser){
            return res.status(400).send("Email or password incorrect");
        }
        const userLogin = bcrypt.compareSync(req.body.password, verifyUser.password);
        if(!userLogin){
            return res.status(400).send("Email or password incorrect")
        }

        const token = jwt.sign({_id: verifyUser._id, admin: verifyUser.admin}, process.env.TOKEN_SECRET);

        res.header("auth-token", token);
        res.send("Logged");
}};

module.exports = userController;