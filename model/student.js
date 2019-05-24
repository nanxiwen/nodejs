//1. 引入db
const db = require('../config/db');

//2.创建schema
//schema 是一种描述Mongodb中collection(集合)结构的一种东西
const schema = new db.Schema({
    name: {
        type: String,
        required: true
    },

    sex: {
        type: Number,
        default: 0
    },

    age: {
        type: Number,
        default: 18
    },
    isHun: {
        type: Number,
        default: 0
    },

    phone: Number
})

//3.暴露根据 schema 创建出的model：模型
// 创建了一个模型，就是学生模型，
module.exports = db.model('student',schema);

//db.model第一个参数是model的名字,并且他的复数形式是数据库表的名字
//如果你想确定表的名字就叫student，而不是students，可以在创建schema的时候传递第二参数