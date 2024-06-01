var express = require("express");
var router = express.Router();

const controller = require("../Controllers/books");

router.get("/", controller.getAllBooks);
router.get("/:id", controller.getBookById);
router.delete("/:id", controller.deleteBook);
router.put("/:id", controller.updateBook);
router.post("/", controller.createBook);

module.exports = router;