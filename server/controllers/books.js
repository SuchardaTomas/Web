const db = require("../helpers/db");

exports.getAllBooks = (req, res) => {
  db.query("SELECT * FROM books ORDER BY RAND();",
    (err, result, fields) => {
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

exports.getBooksByName = (req, res) => {
  const searchString = "%" + req.params.name + "%";
  db.query(
    "SELECT * FROM books WHERE name LIKE ?",
    [searchString],
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
    "INSERT INTO books (name, author, pages, image) VALUES (?, ?, ?, ?);",
    [req.body.name, req.body.author, req.body.page, req.body.image],
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
    "UPDATE books SET name = ?, author = ?, pages = ?, image = ? WHERE id = ?;",
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