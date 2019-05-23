//引入db

const db = require('../config/db');
//设计 schema
const schema = new db.Schema({
    //用户名
    username: {
        type: String,
        required: true,  //必须
    },
    
    //密码
    password: {
        type: String,
        required: true,  //必须
    },
    //呢称
    nickname: String,
    //性别
    sex: {
        type: Number,
        default: 1
    },
    //用户头像
    avatar: {
        type: String,
        default: 'http://localhost:3000/images/avatar.jpg'
    },
    //是否是管理员
    admin: {
        type: Number,
        default: 0
    }
})

//基于 schema 创建出model
module.exports = db.model('user', schema);

//db.model第一个参数是model的名字,并且他的复数形式是数据库表的名字
//如果你想确定表的名字就叫user，而不是users，可以在创建schema的时候传递第二参数