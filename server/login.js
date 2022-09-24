const express = require('express')
const bodyParser = require('body-parser')
const jsonwebtoken = require('jsonwebtoken')


const app = express()

app.use(bodyParser.json())


app.get('/healthz', (req, res) => res.send('200 OK.'))

app.post('/auth/login', (req, res) => {

  const body = req.body


  if (body.username === 'dev@lmes.in' && body.password === '123') {

    //
    const token = jsonwebtoken.sign({
      userId: 1
    }, 'SECRET_JEY', {
      expiresIn: 60 * 15
    })


    return res.json({
      token,
      success: true
    })


  }

  return res.json({
    success: false
  })

})

app.use((req, res, next) => {

  const token = req.headers.authorization.replace('Bearer', '').trim()

  console.log(token)


  try {

    const data = jsonwebtoken.verify(token, 'SECRET_JEY')

    console.log("data", data)

    if (data.userId) {
      return next()
    }

  } catch (err) {
    console.log(err)
    return res.status(401).json({
      success: false
    })

  }

  return res.status(401).json({
    success: false
  })


})

app.get('/auth/user', (req, res) => {
  return res.json({
    success: true,
    user: {}
  })
})

module.exports = app
