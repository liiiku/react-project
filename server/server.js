const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')

const app = express()

app.use(cookieParser())
app.use(bodyParser.json())
// 如果中间件是路由的，就有第一个参数路由地址，会面是该路由地址对应的内容
// 只要和/user 相关的，他的子路由是userRouter来定义
app.use('/user', userRouter)

app.listen(9093, function() {
  console.log('node app start at port 9093')
})