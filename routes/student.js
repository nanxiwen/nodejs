const express = require('express');
//引入用户逻辑层
const StudentCtrl = require('../controller/studentCtrl');
//使用express.Router将不同的路由分离到不同的路由文件
//1. 创建路由容器
const router = express.Router();

//把路由挂到路由容器上
router.route('/stu')
    .post(StudentCtrl.add)
    .get(StudentCtrl.find)

    //暴露路由容器
    module.exports = router;