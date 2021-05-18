const express = require('express')
const mongodb = require('mongodb')
const ejsMate = require('ejs-mate')
const path = require('path')

const app = express()

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index.ejs')
}) 

app.get('/check', (req, res) => {
    res.render('check.ejs')
})

app.listen(3000, (req, res) => {
    console.log('its alive!!!!!!')
})