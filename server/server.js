const express = require('express')
const mongoose = require('mongoose')
// 链接mongo 并且使用imooc这个集合，没有回自动帮忙建
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
  console.log('mongo connect success!')
})

// 类似mysql的表，mongo里有文档的概念 文档模型《----》表
// 说明文档叫user，也就是表叫user，表中的值，也就是说文档内容呢，通过new mongoose.Schema({})定义
const User = mongoose.model('user', new mongoose.Schema({
  user: { type: String, require: true },
  age: { type: Number, require: true }
}))

// mongoose 对数据的操作，第一个参数是 过滤的对象 相当于mysql中的where
// create 新增数据
// User.create({
//   user: 'imoocer',
//   age: 23
// }, function(err, doc) {
//   if (!err) {
//     console.log(doc) // 就是数据
//   } else {
//     console.log(err)
//   }
// })

// 删除数据
// User.remove({age: 23}, function(err, doc) {
//   console.log(doc)
// })

// 更新
User.update({'user': 'imoocer'}, {'$set': {age: 33}}, function(err, doc) {
  console.log(doc)
})

const app = express()

app.get('/', function(req, res) {
  res.send('<h1>hello world</h1>')
})

app.get('/data', function(req, res) {
  User.find({}, function(err, doc) {
    res.json(doc) // doc就是数据
  })
  // res.json({name: 'imooc React', type: 'IT'})
})

app.listen(9093, function() {
  console.log('node app start at port 9093')
})