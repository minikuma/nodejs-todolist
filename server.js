/**
 * Created by wminikuma@gmail.com on 2020/09/11
 * Blog : https://minikuma-laboratory.tistory.com/
 * Github : http://github.com/minikuma
 */

const express = require('express');
const dotenv = require('dotenv');
const db = require('./db/db');
const routes = require('./routes/todoRoute')
dotenv.config();

const app = express();

app.use(express.static(__dirname + '/public'));

// EJS 사용
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));

// router 사용
app.use('/', routes);

// GET/DELETE/UPDATE/POST Method -> router 로 이동

// mongoose connection - refactoring-1 (별도 db.js 파일 생성)
db();

app.listen(4000, () => {
    console.log("Node js Express Sever Stated")
});

