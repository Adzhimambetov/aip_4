var express = require('express')
var router = express.Router()
var Hero = require("../models/hero").Hero
var User = require("../models/User").User

/* GET home page. */
router.get('/', function (req, res, next) {
  Hero.find({}, { _id: 0, title: 1, nick: 1 }, function (err, menu) {
    req.session.greeting = "Hi!!!"
    res.render('index', {
      title: 'Express',
      counter: req.session.counter
    });
  })

});

/* GET login/registration page. */
router.get('/logreg', function (req, res, next) {
  res.render('logreg', { title: 'Вход' });
});

/* POST login/registration page. */
router.post('/logreg', function (req, res, next) {
  var username = req.body.username
  var password = req.body.password
  console.log(username, password)
  User.findOne({ username: username }, function (err, user) {
    if (err) return next(err)
    if (user) {
      console.log(user)
      if (user.checkPassword(password)) {
        req.session.user = user._id
        res.redirect('/')
      } else {
        res.render('logreg', { title: 'Вход' })
      }
    } else {
      var user = new User({ username: username, password: password })
      console.log(user)
      user.save(function (err, user) {
        if (err) return next(err)
        req.session.user = user._id
        res.redirect('/')
      })
    }
  })
});



module.exports = router;