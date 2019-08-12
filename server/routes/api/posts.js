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

exports.post = (req, res) => {
    Post.model.findById(req.params.id, (err, post) => {
        if(err) throw err;
        res.json(post)
    })
}
