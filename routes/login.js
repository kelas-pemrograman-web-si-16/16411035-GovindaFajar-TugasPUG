var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('login', {nama: 'Govinda Fajar Hidayatullah'})
})

router.get('/regist/', function(req, res, next) {
    res.render('regist', {nama: 'Govinda Fajar Hidayatullah'})
})

module.exports = router;