const { MongoClient } = require("mongodb");
const connectionString = 'mongodb+srv://user:user123@cluster0.zo1gplg.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let dbConnection;
module.exports = {
    connectToServer: ()=> {
        client.connect((err, db) => {
            if (err || !db) {
                return console.log(err);
            }
            dbConnection = db.db("horizons");
            console.log("Successfully connected to MongoDB.");
        });
    },
    getDb: ()=>{
        return dbConnection;
    },
};

// const MongoClient = require('mongodb').MongoClient; // mongoDB호출
// // const express = require('express');
// // const app = express();
// // const bodyParser = require('body-parser');

// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.json());

// var db = null;
// MongoClient.connect('mongodb+srv://user:user123@cluster0.zo1gplg.mongodb.net/?retryWrites=true&w=majority', (err, client) => {
//     // DB연결 성공하면 할 일
//     if (err) return console.log('에러', err, client)
//     db = client.db('horizons');
//     console.log('db :>> ', db);

// });

// module.exports = db;