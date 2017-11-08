
const express=require('express');
var util = require('util');
module.exports=function (){
    var router=express.Router();
    router.get('/lod', (req, res)=>{
        var id = req.session.id;

        var mysql = require('mysql') ;
        var connection = mysql.createConnection({
            host : 'localhost' ,
            user : 'root' ,
            password : 'root' ,
            database : 'daka'
        });

        var selectSql = 'select * from time where id = ?' ;
        connection.query(selectSql,[id],function(err,cb){
            var data = JSON.parse(util.format('%j',cb[0]));
            console.log(data)
            if(cb.length > 0){
                res.send(cb).end();
            }
        })
        connection.end();

    });
    router.get('/add', (req, res)=>{
        var id = req.session.id;
        var length = req.param('length');
        var time = req.param('time');
        var mysql = require('mysql') ;
        var connection = mysql.createConnection({
            host : 'localhost' ,
            user : 'root' ,
            password : 'root' ,
            database : 'daka'
        });

        var selectSql = 'insert into time values(?,?,?)' ;
        connection.query(selectSql,[time,length,id],function(err,cb){
            if(!err){
                console.log('ssssssssss');
                var na = {type:true};
                res.send(na).end();
            }
        })
        connection.end();

    });
    router.get('/', (req, res)=>{
        console.log(89787897897879879879);
        var user = req.param('user');
        var pwd = req.param('pwd');

        var mysql = require('mysql') ;
        var connection = mysql.createConnection({
            host : 'localhost' ,
            user : 'root' ,
            password : 'root' ,
            database : 'daka'
        });

        var selectSql = 'select * from user where user = ? and pwd = ?' ;
        connection.query(selectSql,[user,pwd],function(err,cb){
            var data = JSON.parse(util.format('%j',cb[0]));
            if(cb.length > 0){
                req.session.id = data.id;
                res.render('index.html');
            }
        })
        connection.end();
    });

    return router;
};
