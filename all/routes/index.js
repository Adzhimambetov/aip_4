var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница  */
router.get('/cristiano', function (req, res, next) {
  res.render('player', {
    title: "Криштиану Роналду",
    picture: "images/Cristiano.png",
    desc: "Плюшевый медвежонок, игрушка"
  });
});
/* Страница */
router.get('/messi', function (req, res, next) {
  res.render('player', {
    title: "Лионель Месси",
    picture: "images/messi.png",
    desc: "Плюшевый медвежонок, игрушка"
  });
});
/* Страница  */
router.get('/benzema', function (req, res, next) {
  res.render('player', {
    title: "Карим Бензема",
    picture: "images/benzema.png",
    desc: "Плюшевый медвежонок, игрушка"
  });
});
/* Страница  */
router.get('/neymar', function (req, res, next) {
  res.render('player', {
    title: "Неймар",
    picture: "images/neymar.png",
    desc: "Плюшевый медвежонок, игрушка"
  });
});
/* Страница */
router.get('/robert', function (req, res, next) {
  res.render('player', {
    title: "Роберт Левандовский",
    picture: "images/robert.png",
    desc: "Плюшевый медвежонок, игрушка"
  });
});

module.exports = router;
