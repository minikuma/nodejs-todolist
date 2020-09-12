/**
 * Created by wminikuma@gmail.com on 2020/09/11
 * Blog : https://minikuma-laboratory.tistory.com/
 * Github : http://github.com/minikuma
 */

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const TodoTask = require('./model/TodoTask');

dotenv.config();

const app = express();

app.use(express.static(__dirname + '/public'));

// EJS 사용
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

/*
app.get('/', (req, res) => {
    res.render('todo.ejs')
})*/

app.use(express.urlencoded({extended: true}));


// GET Method
app.get('/', (req, res) => {
    TodoTask.find({}, (err, tasks) => {
        console.log(`tasks: ${tasks}`);
       res.render('todo.ejs', { todoTasks: tasks });
    });
});

// POST Method
app.post('/', async (req, res) => {
   const todoTask = new TodoTask({
       content: req.body.content
   });

   try {
       await todoTask.save();
       res.redirect('/');
   } catch (err) {
       res.redirect('/');
   }
});


// mongoose connection
mongoose.connect(process.env.DB_CONNECT, {
        useFindAndModify: true,
   }, () => {
    console.log('Connected MongoDB!');
    app.listen(4000, () => {
        console.log("Node js Express Sever Stated")
    });
});