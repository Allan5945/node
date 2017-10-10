const express = require('express');
const app = express();
const static=require('express-static');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const multer=require('multer');
const multerObj=multer({dest: './static/upload'});
const http = require("http");
const path = require('path');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const expressRoute=require('express-route');

app.use(express.static(path.join(__dirname,'/src/staticPublic')));  // 配置静态资源路径 -相当于省略 /src/staticPublic 路径 - 如果你的静态资源存放在多个目录下面，你可以多次调用 express.static 中间件：

app.use('/',require('./dao/admin')());
// app.use('/login/',require('./dao/dao')());
app.use('*',function (req,res) {
    res.send('没找到');
})

app.listen(80,function () {
    console.log('服务器已经启动》》》》》》》》》》》》》》》》')
});  // 监听端口号