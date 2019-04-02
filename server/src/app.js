const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', require('../routes/api/user'))

const port = process.env.PORT || 8085

app.listen(port, () => {
  console.log('Server listening on port: ' + port)
})
