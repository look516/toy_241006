var express = require('express');
var router = express.Router();

// controllers로 옮긴다.
var index = require('../controllers/index')

// MVC로 분리
router.get('/', index.getAllBlog);
router.get('/:id', index.getIdBlog);

module.exports = router;