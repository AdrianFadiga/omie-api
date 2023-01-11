const express = require('express')
const app = express()
const port = 1234
const router = require('./routes')

app.use('/', router)

app.use(express.json())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
