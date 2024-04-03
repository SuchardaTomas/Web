const express = require('express');
const router = express.Router();

const bookController = require("../controllers/books");

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.postBook);
router.put('/:id', bookController.putBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
