class NewsController {
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.render('action');
    }
}

module.exports = new NewsController();
