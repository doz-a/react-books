const express = require('express'),
    { api: controller } = require('../../controllers');


const router = express.Router();

router.route('/')
    .get(controller.getMain)
    .get(controller.find);

router.route('/:id')
    .delete(controller.deleteOne);

router.route('/books')
    .post(controller.addBook);

module.exports = router;