const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, path.join(__dirname, "./server/img"));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});

const filter = (req, file, cb) => {
    file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png"
        ? cb(null, true)
        : cb(null, false);
};

exports.upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10,
    },
    fileFilter: filter,
});