var MongoClient = require('mongodb').MongoClient;

var DB_CONN_DATA = 'mongodb://localhost:27017/Mall';

var insertData = function(db, callback) {
    var collection = db.collection('mall');
    var data = [{
        "name": '123',
        "url": '123'
    }];
    collection.insert(data, function(err, result) {
        if (err) {
            console.log('err' + err);
            return;
        }
        callback(result);
    });
}

MongoClient.connect(DB_CONN_DATA, function(err, db) {
    console.log('连接成功');
    insertData(db, function(result) {
        console.log(result);
        db.close();
    })
});