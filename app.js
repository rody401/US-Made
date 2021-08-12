const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('database')

require('dotenv').config({path: './config/.env'})
connectDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use('/'. homeRoutes)

app.listen(process.env.PORT, ()=> {
    console.log('Serving is running!')
})