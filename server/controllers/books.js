const Book = require("../models/books");

exports.getAllBooks = async (req, res) => {
  try {
    const result = await Book.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Books found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Books not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getBookById = async (req, res) => {
  try {
    const result = await Book.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Book found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Book not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Book deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateBook = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      author: req.body.author,
      pages: req.body.pages,
    };
    const result = await Book.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Book updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Book was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createBook = async (req, res) => {
  try {
    const data = new Book({
      name: req.body.name,
      author: req.body.author,
      pages: req.body.pages,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Book created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Book was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};