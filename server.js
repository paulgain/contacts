const express = require('express')
const app = express()
const port = 3000

console.log(`FIRST_NAME: ${process.env.FIRST_NAME}`)
console.log(`LAST_NAME: ${process.env.LAST_NAME}`)

app.get('/', (req, res) => res.send(`HELLO ${process.env.FIRST_NAME} ${process.env.LAST_NAME}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
