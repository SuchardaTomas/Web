const Uploads = require("../models/uploads");
const imageController = require("../controllers/image");
const path = require("path");

exports.getUploads = async (req, res) => {
  try {
    const result = await Uploads.find();
    if (result && result.length !== 0) {
      return res.status(200).json({
        payload: result,
        msg: "Uploads found!",
      });
    }
    res.status(500).json({ msg: "Uploads not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

exports.getUpload = async (req, res) => {
  try {
    const result = await Uploads.findById(req.params.id).select("-__v");
    if (result) {
      return res.status(200).json({
        payload: result,
        msg: "Upload found!",
      });
    }
    res.status(500).json({ msg: "Upload not found" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
    });
  }
};

const uploadFile = imageController.upload.single("imgFile");

const saveFileIntoFolder = (req, res, next) => {
  uploadFile(req, res, (err) => {
    if (err) {
      console.log(err);
      console.log("error while uploading file");
      return res.status(500).send(err);
    }
    console.log("File uploaded");
    next();
  });
};

const saveIntoDb = async (req, res) => {
  try {
    const upload = new Uploads({
      name: req.body.imgName,
      imagePath: "http://localhost:3000/img/" + req.file.filename,
    });
    const result = await upload.save();
    if (result) {
      return res.status(201).json({
        msg: "Upload created!",
        payload: result,
      });
    }
    res.status(500).json({ msg: "Upload failed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

exports.postUpload = [saveFileIntoFolder, saveIntoDb];
