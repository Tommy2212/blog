const newsRouter = require('./news');
const siteRouter = require('./site');

const route = (app) => {
    app.get('/', (req, res) => {
        res.render('home');
             });

    app.use('/news', newsRouter);
    app.use('/', siteRouter);
};

module.exports = route;
