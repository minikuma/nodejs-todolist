/**
 * Created by wminikuma@gmail.com on 2020/09/11
 * Blog : https://minikuma-laboratory.tistory.com/
 * Github : http://github.com/minikuma
 */

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// EJS 사용
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('todo.ejs')
})

app.use(express.urlencoded({extended: true}));


// POST Method
app.post('/', (req, res) => {
   console.log(req.body);
});


app.listen(4000, () => {
    console.log("Node js Express Sever Stated")
});
