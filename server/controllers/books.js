const db = require("../helpers/db");

exports.getAllBooks = (req, res) => {
  db.query("SELECT * FROM books ORDER BY RANDOM();", (err, result) => {
    if (err) {
      console.error("Error retrieving books:", err);
      return res.status(500).send({ error: "Error retrieving books" });
    }
    res.status(200).send({
      msg: "Books found",
      result: result.rows, 
    });
  });
};

exports.getBookById = (req, res) => {
  db.query(
    "SELECT * FROM books WHERE id = $1;", 
    [req.params.id],
    (err, result) => {
      if (err) {
        console.error("Error retrieving book:", err);
        return res.status(500).send({ error: "Error retrieving book" });
      }
      res.status(200).send({
        msg: "Book found",
        result: result.rows,
      });
    }
  );
};

exports.getBookByNameAndId = (req, res) => {
  db.query(
    "SELECT * FROM books WHERE name = $1 AND id = $2",
    [req.params.name, req.params.id],
    (err, result) => {
      if (err) {
        console.error("Error retrieving book:", err);
        return res.status(500).send({ error: "Error retrieving book" });
      }
      res.status(200).send({
        msg: "Book found",
        result: result.rows,
      });
    }
  );
};

exports.getBooksByName = (req, res) => {
  const searchString = `%${req.query.name}%`; 
  db.query(
    "SELECT * FROM books WHERE name ILIKE $1",
    [searchString],
    (err, result) => {
      if (err) {
        console.error("Error retrieving books:", err);
        return res.status(500).send({ error: "Error retrieving books" });
      }
      res.status(200).send({ msg: "Books found", result: result.rows });
    }
  );
};

exports.createBook = (req, res) => {
  db.query(
    "INSERT INTO books (name, author, pages, image) VALUES ($1, $2, $3, $4) RETURNING *;",
    [req.body.name, req.body.author, req.body.pages, req.body.image],
    (err, result) => {
      if (err) {
        console.error("Error creating book:", err);
        return res.status(500).send({ error: "Error creating book" });
      }
      res.status(200).send({
        msg: "Book created",
        result: result.rows[0], 
      });
    }
  );
};

exports.updateBook = (req, res) => {
  db.query(
    "UPDATE books SET name = $1, author = $2, pages = $3, image = $4 WHERE id = $5 RETURNING *;",
    [req.body.name, req.body.author, req.body.pages, req.body.image, req.params.id],
    (err, result) => {
      if (err) {
        console.error("Error updating book:", err);
        return res.status(500).send({ error: "Error updating book" });
      }
      res.status(200).send({
        msg: "Book updated",
        result: result.rows[0], 
      });
    }
  );
};

exports.deleteBook = (req, res) => {
  db.query(
    "DELETE FROM books WHERE id = $1 RETURNING *;", 
    [req.params.id],
    (err, result) => {
      if (err) {
        console.error("Error deleting book:", err);
        return res.status(500).send({ error: "Error deleting book" });
      }
      res.status(200).send({
        msg: "Book deleted",
        result: result.rows[0], 
      });
    }
  );
};
