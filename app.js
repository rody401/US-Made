const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.ejs')
})

app.listen(PORT, ()=> {
    console.log(`Serving on port ${PORT}`)
})