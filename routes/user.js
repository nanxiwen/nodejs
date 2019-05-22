const express = require('express');
// const UserModel = require('../model/user');
const UserCtrl = require('../controller/userCtrl');
const router = express.Router();

//跟用户相关的请求地址 都会是 http://localhost:3000/api/user
router.route('/user')
    .get(UserCtrl.findUser)
    .post(UserCtrl.addUser)
    .delete(UserCtrl.delUser)
    .put(UserCtrl.upUser)

// 获取我们的用户列表信息
// http://localhost:3000/user/find

// router.get('/find', function(req,res){
//     //1.链接数据库
//     //2.需要操作那张表（集合）,就需要去构建一个相对应的model对象
//     //  2.1需要schema来定制这张表的结构,
//     //3.直接使用model对象去做操作

//     UserModel
//     .find().then(data => {
//         console.log(data);
//         res.send({
//             code: 0,
//             msg: '获取成功',
//             data: {
//                 list: data
//             }
//         })
//     })
//     .catch(function err(){
//         console.log(err.message);
//         res.send({
//             code: -1,
//             msg: '获取失败'
//         })
//     })
// })

// // 新增用户
// // http://localhost:3000/user/add


// router.post('/add', function(req,res){
//     //1.获取前端传递过来的参数
//     let name = req.body.name; //用户名
//     let pwd = req.body.pwd; //密码
//     let nickname = req.body.nickname; //昵称
//     let avatar = req.body.avatar; //头像

//     //2.对数据做一下校验
//     if(!name || !pwd){
//         res.send({
//             code: -1,
//             msg: '用户名或密码不能为空'
//         })

//         return;
//     }

//     //3.通过UserModel生成 user 实例
//     const user = new UserModel({
//         username: name,
//         password: pwd,
//         nickname: nickname,
//         avatar: avatar
//     })

//     //4.使用user实例的save方法,存入数据库
//     user.save().then(() => {
//         res.send({
//             code: 0,
//             msg: '注册成功'
//         })
//     }).catch(function err(){
//         res.send({
//             code: -1,
//             msg: '注册失败'
//         })
//     })
// })


// // 修改用户
// // http://localhost:3000/user/update


// router.post('/update', function(req,res){
//     //1.获取前端传递过来的参数
//     let id = req.body.id;
//     let nickname = req.body.nickname;

//     //2.对参数做校验

//     //3.使用UserModel的修改方法
//     UserModel.updateOne({_id: id}, { nickname: nickname })
//     .then(function data(){
//         console.log(data);
//         res.send({
//             code: 0,
//             msg: '修改成功'
//         })
//     }).catch(function err(){
//         console.log(err);
//         res.send({
//             code: -1,
//             msg: '修改失败'
//         })
//     })
// })

// // 删除用户
// // http://localhost:3000/user/del


// router.get('/del', function (req,res){
//     let id = req.query.id;

//     UserModel.deleteOne({ _id: id}).then(data => {
//         res.send({
//             code: 0,
//             msg: '删除成功'
//         })
//     }).catch(err => {
//         res.send({
//             code: -1,
//             msg: '删除失败'
//         })
//     })
// })

module.exports = router;