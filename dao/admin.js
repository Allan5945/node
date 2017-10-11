const express=require('express');
const path = require('path');
module.exports=function (){
    var router=express.Router();
    router.get('/', (req, res)=>{
        res.render('index.html');
    });
    return router;
};
