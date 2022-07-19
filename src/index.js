const express = require('express');
const app = express();

const port = 3000;

const db = require('./config/db');
db.connect();

const morgan = require('morgan');
app.use(morgan('combined'));

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const handlebars = require('express-handlebars');
app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

const route = require('./routes');
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
