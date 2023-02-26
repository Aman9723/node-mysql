const router = require('express').Router();
const postControllers = require('../controllers/postControllers');

// @route GET && POST - /posts/
router
    .route('/')
    .get(postControllers.getAllPosts)
    .post(postControllers.createNewPost);

router.route('/:id').get(postControllers.getPostById);

module.exports = router;
