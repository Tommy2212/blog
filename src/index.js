const express = require('express')
const app = express()
const path = require('path')
const port = 3000


const morgan = require('morgan')
app.use(morgan('combined'))


app.use(express.static(path.join(__dirname,'public')))


app.use(express.urlencoded({extended:true}))
app.use(express.json())


const handlebars  = require('express-handlebars')
app.engine('hbs', handlebars.engine({extname : 'hbs'}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources\\views'))


const route = require('./routes')
route(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})