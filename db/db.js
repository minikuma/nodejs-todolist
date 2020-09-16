/**
 * Created by wminikuma@gmail.com on 2020/09/16
 * Blog : https://minikuma-laboratory.tistory.com/
 * Github : http://github.com/minikuma
 */

const mongoose = require('mongoose');

module.exports =() => {
    function mongooseConnect() {
        mongoose.connect(process.env.DB_CONNECT, {
            useFindAndModify: false,
        }, function (err) {
            if (err) {
                console.error('mongoDB Connection Error...', err);
            } else {
                console.log('mongoDB Connected...');
            }
        });
    }
    mongooseConnect();
    mongoose.connection.on('disconnected', mongooseConnect);
}

