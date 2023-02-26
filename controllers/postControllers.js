const Post = require('../models/Post');

exports.getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json({ count: posts[0].length, posts: posts[0] });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.createNewPost = async (req, res, next) => {
    try {
        const { title, body } = req.body;
        let post = new Post(title, body);

        post = await post.save();
        console.log(post);

        res.status(201).json({ message: 'Post created' });
    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.getPostById = async (req, res, next) => {
    try {
        let post = await Post.findById(req.params.id);

        res.status(200).json({ post: post[0] });
    } catch (error) {
        console.log(error);
        next(error);
    }
};
