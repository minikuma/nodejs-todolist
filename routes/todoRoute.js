/**
 * Created by wminikuma@gmail.com on 2020/09/18
 * Blog : https://minikuma-laboratory.tistory.com/
 * Github : http://github.com/minikuma
 */

const router = require('express').Router();
const TodoTask = require('../model/TodoTask');

// GET Route
router.get('/', (req, res) => {
    TodoTask.find({}, (err, tasks) => {
        res.render('todo.ejs', {todoTasks: tasks});
    })
});

// POST Route
router.post('/', async (req, res) => {
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

// UPDATE = GET + POST
router.route('/edit/:id')
    .get((req, res) => {
       const id = req.params.id;
       TodoTask.find({}, (err, tasks) => {
           res.render('todoEdit.ejs', {todoTasks: tasks, idTask: id});
       })
    })
    .post((req, res) => {
        const id = req.params.id;
        TodoTask.findOneAndUpdate(id, { content: req.body.content} , err => {
            if (err) {
                return res.status(500).json({error: 'Update method Fail!'});
            }
            res.redirect('/');
        })
    });

// DELETE
router.route('/remove/:id')
    .get((req, res) => {
       const id = req.params.id;
       TodoTask.findOneAndRemove(id, err => {
          if (err) {
              return res.status(500).json({error: 'Remove method Fail!'});
          }
          res.redirect('/');
       });
    });

module.exports = router;
