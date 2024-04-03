import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function BookCreateForm() {
  const [formData, setFormData] = useState({});
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const res = await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.msg == "User created") {
      redirectToSuccessPage(book.payload._id);
    } else {
      setInfo(res.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/createdbook/${id}`);
  };

  return (
    <>
      <h1>Book create form</h1>

      <form className="form">
        <div className="field">
          <label className="label">Název</label>
          <div className="control">
            <input
              required
              name="name"
              className="input"
              type="text"
              placeholder="Název"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Autor</label>
          <div className="control">
            <input
              required
              name="author"
              className="input"
              type="text"
              placeholder="Autor"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Vydavatel</label>
          <div className="control">
            <input
              required
              name="publisher"
              className="input"
              type="text"
              placeholder="Vydavatel"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Cena</label>
          <div className="control">
            <input
              required
              name="price"
              className="input"
              type="text"
              placeholder="Cena"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Jazyk</label>
          <div className="control">
            <input
              required
              name="language"
              className="input"
              type="text"
              placeholder="Jazyk"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>

        {success ? <p className="has-text-success">Úspěch!</p> : ""}

        <button className="button" onClick={handlePost}>
          Přidat
        </button>
      </form>

      <p>{info}</p>

      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
