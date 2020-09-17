/**
 * Created by wminikumagmail.com on 2020/09/18
 * Blog : https://minikuma-laboratory.tistory.com/
 * Github : http://github.com/minikuma
 */

const router = require('express').Router();
const TodoTask = require('../model/TodoTask');

// GET ROUTE
router.get('/', (req, res) => {
    TodoTask.find({}, (err, tasks) => {
        res.render('todo.ejs', {todoTasks: tasks});
    })
});

module.exports = router;
