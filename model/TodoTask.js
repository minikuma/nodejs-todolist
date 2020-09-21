/**
 * Created by wminikumagmail.com on 2020/09/11
 * Blog : https://minikuma-laboratory.tistory.com/
 * Github : http://github.com/minikuma
 */

const mongoose = require('mongoose');
const todoTaskSchema = new mongoose.Schema({
   content: {
        type: String,
        require: true
   },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('TodoTask', todoTaskSchema);