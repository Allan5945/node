var express = require('express');
var app = express();
var http = require("http");
var path = require('path');


app.use(express.static(path.join(__dirname,'/src/staticPublic')));  // 配置静态资源路径 -相当于省略 /src/staticPublic 路径 - 如果你的静态资源存放在多个目录下面，你可以多次调用 express.static 中间件：


app.get('/', function (req, res) {
    res.append('5656',11111);    // 设置响应头 只能两个值  key：value
    var options = {
        host:'192.168.22.8',
        port:80,
        path:'/checkLogin',
        method:'get'
    }
    var requestServer = http.request(options,function(reqSer,resSer){   // 请求数据
        reqSer.setEncoding('utf8');
        var data = {password:123456,username:"wdsadmin"};
        reqSer.on('data', function (chunk) {
            console.log(chunk)
        });
    });
    requestServer.end();

    res.send("111111");
});

app.listen(3000);  // 监听端口号