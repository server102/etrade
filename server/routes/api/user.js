const express = require('express')
const router = express.Router()

router.get('/account', (req, res) => {
  res.send({
    message: 'hello world'
  })
})

module.exports = router
