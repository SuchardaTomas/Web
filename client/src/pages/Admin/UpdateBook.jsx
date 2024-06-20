import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function UpdateBook() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const getBook = async () => {
    const res = await fetch(`http://localhost:3000/book/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    const data = await res.json();
    setBook(data);
    setLoaded(true);
  };

  useEffect(() => {
    getBook();
    console.log(book);
  }, []);

  const UpdateBook = async () => {
    const res = await fetch(`http://localhost:3000/book/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.msg == "Book created") {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    updateBook();
  };

  if (!loaded) {
    return (
      <>
        <p>Loading book...</p>
      </>
    );
  }
  return (
    <>
      <form className="form">
        <div className="field">
          <label className="label">Jméno</label>
          <div className="control">
            <input
              required
              name="name"
              className="input"
              type="text"
              placeholder={book.result[0].name}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Věk</label>
          <div className="control">
            <input
              required
              name="age"
              className="input"
              type="number"
              placeholder={book.result[0].age}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Obrázek (url)</label>
          <div className="control">
            <input
              required
              name="image"
              className="input"
              type="text"
              placeholder="Obrázek"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        {success ? <p className="has-text-success">Úspěch!</p> : ""}

        <button className="button" onClick={handlePost}>
          Přidat
        </button>
      </form>
    </>
  );
}
