const express = require("express");
const router = express.Router();
const auth = require("../controllers/authController");

router.get("/", auth, (req, res) =>{
    if(req.user.admin){
        res.send("Access authorized")
    }else{
    res.send("Admin access only");
    }
});

module.exports = router;