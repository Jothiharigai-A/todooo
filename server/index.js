const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'pmya.canary.lmesacademy.net',
  port: 25060,
  user: 'jothi',
  password: 'v5pvU8pKTw',
  database: '03_jothi',
  dateStrings: 'DATETIME',
})

connection.connect()

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
app.get('/instas', (req, res) => {
  connection.query('SELECT * FROM Instagramapp', (err, result) => {
    console.log(err, result)

    result.forEach((instagramapp, index) => {
      instagramapp.liked = false
    })

    res.json({
      success: true,
      instas: result,
    })
  })
})

app.post('/todos', (req, res) => {
  const todo = req.body

  connection.query('INSERT INTO todo SET ?', [todo], (err, result) => {
    console.log(err, result)
    return res.send('yeahhhhh!!!')
  })
})

app.post('/like/:postId', (req, res) => {
  const postId = req.params.postId
  connection.query(
    'UPDATE Instagramapp SET likes = likes + 1 WHERE id = ?',
    [postId],
    (err, result) => {
      console.log(err, result)
    }
  )

  res.json({
    success: true,
  })
})

app.post('/save/:postId', (req, res) => {
  const postId = req.params.postId
  connection.query(
    'UPDATE Instagramapp SET save = save + 1 WHERE id = ?',
    [postId],
    (err, result) => {
      console.log(err, result)
    }
  )

  res.json({
    success: true,
  })
})

app.delete('/admin/instas', (req, res) => {
  connection.query(
    'DELETE FROM Instagramapp WHERE id = ?',

    (err, result) => {
      console.log(err, result)

      res.json({
        success: true,
      })
    }
  )
})


// Create Post
app.post('/admin/instas', (req, res) => {
  const body = req.body

  connection.query('INSERT INTO Instagramapp SET ?', [body], (err, result) => {
    console.log(err, result)
    return res.json({})
  })
})

// Read Post
app.get('/admin/instas', (req, res) => {
  connection.query('SELECT * FROM Instagramapp', (err, result) => {
    console.log(err, result)

    res.json({
      success: true,
      instas: result,
    })
  })
})

// Update Post
app.put('/admin/instas', (req, res) => {
  const body = req.body

  connection.query(
    'UPDATE Instagramapp SET ? WHERE id = ?',
    [body, body.id],
    (err, result) => {
      console.log(err, result)

      res.json({
        success: true,
      })
    }
  )
})

// Delete Post
app.delete('/admin/instas/:postId', (req, res) => {
  const postId = req.params.postId

  connection.query(
    'DELETE FROM Instagramapp WHERE id = ?',
    [postId],
    (err, result) => {
      console.log(err, result)

      res.json({
        success: true,
      })
    }
  )
})

module.exports = app
