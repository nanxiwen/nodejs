const UserModel = require('../model/user');

const findUser = (req,res) => {
    //1.链接数据库
    //2.需要操作那张表（集合）,就需要去构建一个相对应model对象
    //  2.1需要schema来定制这张表的结构
    //3.直接使用model对象去做操作
    UserModel.find().then(data => {
        console.log(data);
        res.send({
            code: 0,
            msg: '获取成功',
            data: {
                list: data
            }
        })
    })
    .catch(err => {
        console.log(err.message);
        res.send({
            code: -1,
            msg: '获取失败'
        })
    })
}
const addUser = (req, res) => {
    //1.获取前端传递过来的参数
    let name = req.body.name;   //用户名
    let pwd =req.body.pwd;  //密码
    let nickname = req.body.nickname;   //昵称
    let avatar = req.body.avatar;   //头像

    //2.对数据做一下校验
    if(!name || !pwd){
        res.send({
            code: -1,
            msg: '用户名或密码不能为空'
        })

        return;
    }
    //3.通过UserModel生成user实例
    const user = new UserModel({
        username: name,
        password: pwd,
        nickname: nickname,
        avatar: avatar
    })

    //4.使用user实例的save方法,存入数据库
    user.save().then(() => {
        res.send({
            code: 0,
            msg: '注册成功'
        })
    }).catch(err => {
        res.send({
            code: -1,
            msg: '注册失败'
        })
    })
}

const delUser = (req,res) =>{
    let id = req.query.id;

    UserModel
        .deleteOne({ _id:   id})
        .then(data => {
            res.send({
                code: 0,
                msg: '删除成功'
            })
        })
        .catch(err => {
            res.send({
                code: -1,
                msg: '删除失败'
            })
        })
}

const upUser = (req,res) => {
    //1.获取前端传递过来的参数

    let id =req.body.id;
    let nickname = req.body.nickname;

    //2.对参数做校验

    //3.使用UserModel 的修改方法
    UserModel
        .updateOne({_id: id}, {nickname: nickname })
        .then(data => {
            console.log(data);
            res.send({
                code: 0,
                msg: '修改成功'
            })
        })
        .catch(err => {
            console.log(err);
            res.send({
                code: -1,
                msg: '修改失败'
            })
        })
}

module.exports = {
    findUser,
    addUser,
    delUser,
    upUser
}