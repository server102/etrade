const express = require('express')
const router = express.Router()

router.post('/register', (req, res) => {
  res.send({
    message: 'Registering user: ' + req.body.email
  })
})

module.exports = router
