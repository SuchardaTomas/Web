const db = require("../helpers/db");

exports.getAllBooks = (req, res) => {
  db.query("SELECT * FROM books ORDER BY id DESC;", (err, result, fields) => {
    if (err) return console.log(err);
    res.status(200).send({
      msg: "Books found",
      result,
    });
  });
};

exports.getBookById = (req, res) => {
  db.query(
    "SELECT * FROM books WHERE id = ?;",
    [req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Book found",
        result,
      });
    }
  );
};

exports.getBookByNameAndId = (req, res) => {
  db.query(
    "SELECT * FROM books WHERE name = ? AND id = ?",
    [req.params.name, req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Book found",
        result,
      });
    }
  );
}

exports.getBookByName = (req, res) => {
  db.query(
    "SELECT * FROM books WHERE name = ?",
    [req.params.name],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Book found",
        result,
      });
    }
  );
}

exports.createBook = (req, res) => {
  db.query(
    "INSERT INTO books (name, author, pages) VALUES (?, ?, ?);",
    [req.body.name, req.body.author, req.body.pages],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Book created",
        result,
      });
    }
  );
};

exports.updateBook = (req, res) => {
  db.query(
    "UPDATE books SET name = ?, author = ?, pages = ? WHERE id = ?;",
    [req.body.name, req.body.author, req.body.pages],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Book updated",
        result,
      });
    }
  );
};

exports.deleteBook = (req, res) => {
  db.query(
    "DELETE FROM books WHERE id = ?;",
    [req.params.id],
    (err, result, fields) => {
      if (err) return console.log(err);
      res.status(200).send({
        msg: "Book deleted",
        result,
      });
    }
  );
};