const express = require("express");
const router = express.Router();
const uploadsController = require("../controllers/uploads");

router.post("/", uploadsController.postUpload);

module.exports = router;