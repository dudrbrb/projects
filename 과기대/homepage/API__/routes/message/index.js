const express = require("express");
const router = express.Router();
const db = require('../../database/db.js');
const dbConnection = db.getDb();


router.get("/", (req, res) => {
    console.log('bbb')
    console.log(res)
    res.render('index', { title: 'message' });
});
router.post("/", (req, res) => {
    res.render('post', { title: 'message' });
});

// 정보 불러오기
router.get('/list', (req, res) => {
    db.getDb().collection('message').find().sort({ $natural: -1 }).toArray((err, data) => {
        if (err) return console.log('에러', err)
        if (data) res.json(data)
    });
});

// 새로운 DB 추가하기
router.post('/add', (req, res) => {
     db.getDb().collection('count').findOne({ title: 'message' }, (countErr, countRes) => {
        var messageData = {
            _id: countRes.total,
            writer: req.body.writer,
            message: req.body.message,
            date: req.body.date,
            time: req.body.time
        }

         db.getDb().collection('message').insertOne(messageData, (dbErr, dbRes) => {
            if (dbErr) return console.log(dbErr)
            // if (dbRes) res.json(dbRes)
             db.getDb().collection('count').updateOne({ title: 'message' }, { $inc: { total: 1 } }, (ctErr, ctRes) => {
                if (ctErr) return console.log(ctErr)
            })

        });
    });
});



// DB 수정하기
router.post('/edit', (req, res) => {
     db.getDb().collection('message').updateMany(
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
router.get('/delete/:id', (req, res) => {
     db.getDb().collection('message').deleteOne({ _id: parseInt(req.params.id) }, (err, result) => {
        if (err) console.log(err)
        res.status(200).send({ message: '성공했습니다' });
    })
});

module.exports = router