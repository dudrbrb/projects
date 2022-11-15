var express = require('express');
var router = express.Router();
var messageRouer = require('./message/index.js');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});
/* POST home page. */
router.post('/', (req, res, next) => {
  res.render('post', { title: 'Express' });
});


/**
 * 각 라우터를 /api 하위로 붙이는 곳
 * 
 */
router.use('/message', messageRouer);

module.exports = router;
