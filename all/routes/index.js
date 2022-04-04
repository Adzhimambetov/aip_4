var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница  */
router.get('/cristiano', function (req, res, next) {
  res.send("<h1>Страница Криштиану Роналду</h1>")
});
/* Страница */
router.get('/messi', function (req, res, next) {
  res.send("<h1>Страница Лионеля Месси</h1>")
});
/* Страница  */
router.get('/benzema', function (req, res, next) {
  res.send("<h1>Страница Карима Бензема</h1>")
});
/* Страница  */
router.get('/neymar', function (req, res, next) {
  res.send("<h1>Страница Неймара</h1>")
});
/* Страница */
router.get('/robert', function (req, res, next) {
  res.send("<h1>Страница Роберта Левандовского</h1>")
});

module.exports = router;
