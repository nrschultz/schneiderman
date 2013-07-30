exports.home = function (request, response) {
    return response.render('base.jade', {title: "Ben"});
}
