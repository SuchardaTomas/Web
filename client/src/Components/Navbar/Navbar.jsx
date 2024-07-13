import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavbarData } from "./NavbarData";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <div
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            data-target="navbarExampleTransparentExample"
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navbarExampleTransparentExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start is-flex">
            {NavbarData.map((navbar) => (
              <Link
                key={navbar.path}
                to={navbar.path}
                className={navbar.className}
              >
                <p>{navbar.title}</p>
              </Link>
            ))}
          </div>

          <div className="navbar-end is-flex">
            <div className="navbar-item">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Zadejte název knihy"
                    aria-label="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown} 
                  />
                </div>
                <div className="control">
                  <button
                    className="button"
                    type="submit"
                    onClick={handleSearch}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ width: 24, height: 24 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
