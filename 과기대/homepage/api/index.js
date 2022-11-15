const MongoClient = require('mongodb').MongoClient; // mongoDB호출
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var db;
MongoClient.connect('mongodb+srv://user:user123@cluster0.zo1gplg.mongodb.net/?retryWrites=true&w=majority', (err, client) => {
    // DB연결 성공하면 할 일
    if (err) return console.log('에러', err,client)
    db = client.db('horizons');
    
    console.log('aaa');
});

// message
// 정보 불러오기
app.get('/message/list', (req, res) => {
    console.log('bbb')
    db.collection('message').find().sort({ $natural: -1 }).toArray((err, data) => {
        if (err) return console.log('에러', err)
        if (data) res.json(data)
    });
});

// 새로운 DB 추가하기
app.post('/message/add', (req, res) => {
     db.collection('count').findOne({ title: 'message' }, (countErr, countRes) => {
        var messageData = {
            _id: countRes.total,
            writer: req.body.writer,
            message: req.body.message,
            date: req.body.date,
            time: req.body.time
        }

         db.collection('message').insertOne(messageData, (dbErr, dbRes) => {
            if (dbErr) return console.log(dbErr)
            // if (dbRes) res.json(dbRes)
             db.collection('count').updateOne({ title: 'message' }, { $inc: { total: 1 } }, (ctErr, ctRes) => {
                if (ctErr) return console.log(ctErr)
            })

        });
    });
});

// DB 수정하기
app.post('/message/edit', (req, res) => {
     db.collection('message').updateMany(
        { _id: parseInt(req.body._id) },
        {
            $set: {
                writer: req.body.writer,
                message: req.body.message,
                date: req.body.date,
                time: req.body.time
            }
        },
        (err, 결과) => {
            console.log(결과)
            if (err) console.log(err)
        }
    )
});

// DB 삭제하기
app.get('/message/delete/:id', (req, res) => {
     db.collection('message').deleteOne({ _id: parseInt(req.params.id) }, (err, result) => {
        if (err) console.log(err)
        res.status(200).send({ message: '성공했습니다' });
    })
});






// student
// 정보 불러오기
app.get('/student/list', (req, res) => {
    db.collection('student').find().sort({ $natural: -1 }).toArray((err, data) => {
        if (err) return console.log('에러', err)
        if (data) res.json(data)
    });
});

// 새로운 DB 추가하기
app.post('/student/add', (req, res) => {
     db.collection('count').findOne({ title: 'student' }, (countErr, countRes) => {
        var studentData = {
            _id: countRes.total,
            exhibitor: req.body.exhibitor,
            studentNumber: req.body.studentNumber,
            nameOfWork: req.body.nameOfWork,
            category: req.body.category,
            linkTag: req.body.linkTag
        }

         db.collection('student').insertOne(studentData, (dbErr, dbRes) => {
            if (dbErr) return console.log(dbErr)
             db.collection('count').updateOne({ title: 'student' }, { $inc: { total: 1 } }, (ctErr, ctRes) => {
                if (ctErr) return console.log(ctErr)
            })

        });
    });
});

// DB 수정하기
app.post('/student/edit', (req, res) => {
     db.collection('student').updateMany(
        { _id: parseInt(req.body._id) },
        {
            $set: {
                exhibitor: req.body.exhibitor,
                studentNumber: req.body.studentNumber,
                nameOfWork: req.body.nameOfWork,
                category: req.body.category,
                linkTag: req.body.linkTag
            }
        },
        (err, 결과) => {
            console.log(결과)
            if (err) console.log(err)
        }
    )
});

// DB 삭제하기
app.get('/student/delete/:id', (req, res) => {
     db.collection('student').deleteOne({ _id: parseInt(req.params.id) }, (err, result) => {
        if (err) console.log(err)
        res.status(200).send({ student: '성공했습니다' });
    })
});


module.exports = {
    path: '/api',
    handler: app
};