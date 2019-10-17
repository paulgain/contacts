const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(`HELLO ${process.env.FIRST_NAME} ${process.env.LAST_NAME}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
