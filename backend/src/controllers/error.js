exports.get404 = (req, res, next) => {
    res.send('Page not found', 400);
};
