var express = require('express');
var router = express.Router();
var {models} = require ('../models/index');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/credits',function (req,res,next) {
    res.render('credits',{title1:'Credits List'});
});
router.get('/quizzes',function (req,res,next) {
    models.quiz.findAll()
    .then(quizzes=>{
        res.render('quizzes',{title:"Quiz",quizzes});
    })
        .catch(error=>{next(error)});


})

module.exports = router;
