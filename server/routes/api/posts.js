var keystone = require('keystone');

const Post = keystone.list('Post');
// Creating the API end point
exports.list = function (req, res) {
    Post.model
        .find()
        .where('state', 'published')
        .sort('-publishedDate')
        .exec(function (err, results) {
            if (err) throw err;
            res.json(results);
        });
};
