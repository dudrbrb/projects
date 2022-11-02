const MongoClient = require('mongodb').MongoClient; // mongoDB호출
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
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
    db.collection('count').findOne({title: 'message'}, (countErr, countRes)=>{
        console.log(countRes)
        var messageData = {
            _id: countRes.total, 
            writer: req.body.writer,
            message: req.body.message,
            date: req.body.date,
            time: req.body.time
        }

        db.collection('message').insertOne(messageData, (err, res) => {
            db.collection('count').updateOne({title: 'message'}, {$inc: {total: 1}}, (ctErr, ctRes) => {
                if(ctErr) return console.log(ctErr)
			})
            
            if(err) return console.log(err)
            if(res) console.log(res)
        });
    });
});



// DB 수정하기
app.post('/edit/message', (req, res) => {
    db.collection('message').updateMany(
        {_id: parseInt(req.body._id)},
        {$set:{  
            writer: req.body.writer,
            message: req.body.message,
            date: req.body.date,
            time: req.body.time
        }},
        (err, 결과) => {
            console.log(결과)
            if(err) console.log(err)     
        }
    )
});

// DB 삭제하기
app.get('/delete/message/:id', (req, res) => {
    db.collection('message').deleteOne({_id:parseInt(req.params.id)}, (err, result) => {
        if(err) console.log(err)
        res.status(200).send({message: '성공했습니다'});
    })
});



module.exports = {
  path: '/api',
  handler: app
};