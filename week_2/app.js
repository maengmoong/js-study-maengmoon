const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World! 반갑습니다')
})

app.get('/hello', (req, res) => {
    res.send('안녕하세요!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})