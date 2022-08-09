const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'pmya.canary.lmesacademy.net',
    port: 25060,
    user: 'jothi',
    password: 'v5pvU8pKTw',
    database: '03_jothi'
});

connection.connect();

const app = express()

app.use(bodyParser.json())

app.get('/todos', (req, res) => {

    connection.query('SELECT * FROM todo', (err, result) => {
        if (err) {
            return res.send('Error occured')
        }

        return res.json(result)

    })

})

app.post('/todos', (req, res) => {

    const todo = req.body


    connection.query('INSERT INTO todo SET ?', [todo], (err, result) => {
        console.log(err, result)
        return res.send('yeahhhhh!!!')

    })


})


module.exports = app