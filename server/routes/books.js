var express = require("express");
var router = express.Router();

const controller = require("../controllers/books");

router.get("/", controller.getAllBooks);
router.get("/:id", controller.getBookById);
router.get("/:name", controller.getBooksByName);
router.get("/:name/:id", controller.getBookByNameAndId);

router.delete("/:id", controller.deleteBook);
router.put("/:id", controller.updateBook);
router.post("/", controller.createBook);

module.exports = router;