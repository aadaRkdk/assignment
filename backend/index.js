const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/user', (req, res) => {
  res.send({
    name: "abc",
    balance: 100000000000,
    reward: 1111111111111111
  })
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})