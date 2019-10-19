const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send(`HEY! ${process.env.FIRST_NAME} ${process.env.LAST_NAME}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
