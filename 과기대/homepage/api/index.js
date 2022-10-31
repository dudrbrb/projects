const MongoClient = require('mongodb').MongoClient; // mongoDB호출
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var db;
MongoClient.connect('mongodb+srv://user:user123@cluster0.zo1gplg.mongodb.net/?retryWrites=true&w=majority', (err, client) => {
    // DB연결 성공하면 할 일
    if(err) return console.log('에러', err)
    db = client.db('horizons');
});


// 정보 불러오기
app.get('/list/message', (req, res) => {
    db.collection('message').find().sort({$natural:-1}).toArray((err, data) => {
        if(err) return console.log('에러', err)
        if(data) res.json(data)
    });
});


// 새로운 DB 추가하기
app.post('/add/message', (req, res) => {
    var messageData = {
        writer: req.body.writer,
        message: req.body.message,
        date: req.body.date,
        time: req.body.time
    }
    console.log(req.body)

    db.collection('message').insertOne(messageData, (err, result) => {
        if(err) return console.log(err)
        if(result) console.log(result)
    });
});


// DB 삭제하기
app.delete('/delete/message', (req, res) => {
    var deleteData = {_id: parseInt(req.body.selectData)}

    db.collection('message').deleteOne(deleteData, (err, result) => {
        if(err) console.log(err)
        res.status(200).send({message: '성공했습니다'});
    })
});


// DB 수정하기
app.put('/edit/message', (req, res) => {
    // db.collection('message').updateOne(
    //     {_id: parseInt(req.body._id)},
    //     {$set:{  
    //         writer: '',
    //         message: '',
    //         date: req.body.date,
    //         time: req.body.time
    //     }},
    //     (err, 결과) => {
    //         if(err) console.log(err)
    //     }
    // )
    console.log(req.body)
});


module.exports = {
  path: '/api',
  handler: app
};