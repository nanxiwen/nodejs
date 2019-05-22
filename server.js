//引入
const express = require('express');
const path = require('path');
const app = express();

//引入所有抽离出去的路由文件
const userRouter = require('./routes/user');

//设置模板引擎与模板页面的路径
app.set('views',path.resolve(__dirname,'views'));
app.set('view engine','ejs');

//req.body以前是一个叫body-parser的模板提供
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//静态资源托管
app.use(express.static(path.resolve(__dirname, './public')));

app.use('/api',userRouter);

app.listen(3000);