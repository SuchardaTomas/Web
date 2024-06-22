import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";

export default function Navbar() {
  useEffect(() => {
    let burger = document.querySelector(".burger");
    let menu = document.querySelector("#" + burger.dataset.target);
    burger.addEventListener("click", function () {
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    });
  });

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <div
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start is-flex">
            {NavbarData.map((navbar) => (
              <Link to={navbar.path} className={navbar.className}>
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
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
                <div className="control">
                  <button className="button" type="submit">
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
