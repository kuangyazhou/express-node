let MongoClient = require('mongodb').MongoClient;

let DB_CONN_DATA = 'mongodb://localhost:27017/Mall';


//插入数据;
let insertData = function(db, callback) {
    let count = 104;
    let collection = db.collection('mall');
    let data = [{
        "name": '123',
        "url": count++
    }];
    collection.insert(data, function(err, result) {
        if (err) {
            console.log('err' + err);
            return;
        }
        callback(result);
    });
}


//查询数据
let selectData = function(db, callback) {
    let collection = db.collection('mall');
    let whereStr = { "url": 100 };
    collection.find(whereStr).toArray(function(err, result) {
        if (err) {
            console.log('err' + err);
            return
        }
        callback(result);
    });
};

//更新数据
let updateData = function(db, callback) {
    let collection = db.collection('mall');
    let whereStr = { 'url': "100" };
    var updateStr = { $set: { 'url': 'fuck the king' } };
    collection.update(whereStr, updateStr, function(err, result) {
        if (err) {
            console.log('err' + err);
            return
        }
        callback(result);
    })
};

let delData = function(db, callback) {
    let collection = db.collection('mall');
    let whereStr = { 'url': 104 };
    collection.remove(whereStr, function(err, result) {
        if (err) {
            console.log('err' + err);
            return
        }
        callback(result);
    })
};

MongoClient.connect(DB_CONN_DATA, function(err, db) {
    console.log('连接成功');
    // insertData(db, function(result) {
    //     console.log(result);
    //     db.close();
    // })
    // delData(db, function(result) {
    //     console.log(result);
    //     db.close();
    // })
    // updateData(db, function(result) {
    //     // console.log(result)
    //     if (result.result.ok === 1) {
    //         console.log('数据更新成功');
    //     }
    //     db.close();
    // })
    // selectData(db, function(result) {
    //     console.log('数据查询成功', result);
    //     result.forEach(function(e) {
    //         console.log('url为100的name' + e.name + '\n' + e._id)
    //     });
    //     db.close();
    // });
});