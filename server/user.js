const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const _filter = {'pwd': 0, '__v': 0}

Router.get('/list', function(req, res) {
  // User.remove({}, function(err, doc) {})
  User.find({}, function(err, doc) {
    return res.json(doc)
  })
})

Router.post('/update', function(req, res) {
  const userid = req.cookies.userid
  if (!userid) {
    return res.json({code: 1})
  }
  const body = req.body
  User.findByIdAndUpdate(userid, body, function(err, doc) {
    const data = Object.assign({}, {
      user: doc.user,
      type: doc.type
    }, body)
    return res.json({code: 0, data})
  })
})

Router.post('/login', function(req, res) {
  console.log(16, req.body)
  const {user, pwd} = req.body
  User.findOne({user, pwd: md5Pwd(pwd)}, _filter, function(err, doc) { // 第一个是查询条件，第二个是显示条件 设置成0就是表示这个字段不显示了
    if (!doc) {
      return res.json({code: 1, msg: '用户名或密码错误！'})      
    }
    // 设置cookie
    res.cookie('userid', doc._id)
    console.log(24, doc)
    return res.json({code: 0, data: doc})
  })
})

Router.post('/register', function(req, res) {
  console.log(req.body)
  const {user, pwd, type} = req.body
  User.findOne({user: user}, function(err, doc) {
    if (doc) {
      return res.json({code: 1, msg: '用户名重复'})
    }

    // const userModel = new User({user, type, pwd: md5Pwd(pwd)})
    // userModel.save(function(err, doc) {
    //   if (err) {
    //     return res.json({code: 1, msg: '后端出错了！'})
    //   }
    //   const { user, type, _id } = doc
    //   res.cookie('userid', _id)
    //   return res.json({code: 0, data: {user, type, _id}})
    // })

    // 用create没法获得用户的id，生成之后才有
    User.create({user, type, pwd: md5Pwd(pwd)}, function(err, doc) {
      console.log(49, doc)
      if (err) {
        return res.json({code: 1, msg: '后端出错了！'})
      }
      const { user, type, _id } = doc
      res.cookie('userid', _id)
      return res.json({code: 0, data: {user, type, _id}})
    })
  })
})

Router.get('/info', function(req, res) {
  console.log(43, req.cookies)
  const { userid } = req.cookies
  console.log(46, userid)
  if (!userid) {
    return res.json({code: 1}) // 能否访问boss页面的开关就在这里
  }
  User.findOne({_id: userid}, _filter, function(err, doc) {
    if (err) {
      return res.json({code: 1, msg: '后端出错了！'})
    }
    if (doc) {
      return res.json({code: 0, data: doc})
    }
  })
})

function md5Pwd(pwd) {
  const salt = 'imooc_is_good'
  return utils.md5(utils.md5(pwd + salt)) // 使用两层md加密
}

module.exports = Router