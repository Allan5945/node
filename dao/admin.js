const express=require('express');
const path = require('path');
module.exports=function (){
    var router=express.Router();
    router.get('/', (req, res)=>{
        if(req.session.name == undefined){
            res.render('login.html');
        }else{
            res.render('index.html');
        }
    });
    return router;
};
