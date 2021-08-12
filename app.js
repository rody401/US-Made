const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('database')
const homeRoutes = require('./routes/home')
const aboutRoutes = require('./routes/about')

require('dotenv').config({path: './config/.env'})
connectDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use('/', homeRoutes)
app.use('/about', aboutRoutes)

app.listen(process.env.PORT, ()=> {
    console.log('Serving is running!')
})