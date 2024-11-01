/* mybatis $ npm i mybatis-mapper
최상위 app.js가 있는 경로를 기준으로 경로를 넣어준다.*/
//const mybatisMapper = require('mybatis-mapper');
//mybatisMapper.createMapper(['./models/mybatis/blogMapper.xml'])

// mybatis query
//var format = {language: 'sql', indent: ' '}

// mysql
//var mysql = require('../config/mysql/db');

const blog = require('../models/blog');

module.exports ={
    basicHomePage: function(req, res, next) {
        res.render('index', { title: 'Express' });
        // view - index.ejs를 이용한다.
    }

    , getAllBlog: async function(req, res, next) {
        // var param = {
        //     id : req.params.id
        // }

        // var query = mybatisMapper.getStatement('blogMapper', 'getAllQuery', param, format)
        // mysql.query(query, (error, rows) => {
        //     console.log(rows);
        //     // res.send(rows);
        //     res.json(rows);
        // });

        try {
            const blogs = await blog.findAll(); // 모든 블로그 게시물 조회
            res.json(blogs);
        } catch (error) {
            console.error('Error fetching blogs:', error);
            res.status(500).send('Internal Server Error');
        }
    }

    
    , getIdBlog: async function(req, res, next) {
    
        var param = {
            id : req.params.id
        }

        // var query = mybatisMapper.getStatement('blogMapper', 'getIdQuery', param, format)
        // mysql.query(query, (error, rows) => {
        //     console.log(rows);
            
        //     res.json(rows);
        // });

        try {
            const blogs = await blog.findByPk(param.id); // ID로 블로그 게시물 조회
            if (!blogs) {
                return res.status(404).send('Blog not found');
            }
            res.json(blogs);
        } catch (error) {
            console.error('Error fetching blog:', error);
            res.status(500).send('Internal Server Error');
        }
    
    }
}