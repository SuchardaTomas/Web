import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { NavbarData } from "./NavbarData";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const carts = useSelector((store) => store.cart.items);
  
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => {
      const quantity = Number(item.quantity); 
      if (!isNaN(quantity)) {
        total += quantity;
      }
    });
    setCartItemCount(total);
  }, [carts]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/search?q=${query}`;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <>
      {/* Navbar s vyhledávačem a košíkem */}
      <nav className="bg-white p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center">
          <button
            className="flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
            onClick={toggleSideNav}
          >
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>
        <div className="flex items-center ml-auto space-x-4">
          <div
            className="flex items-center border border-gray-300 rounded-md"
            style={{ width: "250px" }}
          >
            <input
              className="p-2 rounded-l-md focus:outline-none w-full"
              type="text"
              placeholder="Zadejte název knihy"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="text-black p-2 rounded-r-md"
              type="submit"
              onClick={handleSearch}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 h-5" />
            </button>
          </div>
          <div className="relative">
            <Link to="/nakup" className="text-black flex items-center">
              <FontAwesomeIcon icon={faCartShopping} className="w-6 h-6" />
              <span className="absolute -top-3 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Side Navigation */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 backdrop-blur-lg transform transition-transform duration-300 ${
          isSideNavOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        <button
          className="text-2xl p-4 text-black focus:outline-none"
          onClick={toggleSideNav}
        >
          &times;
        </button>
        <div className="p-4 space-y-4 text-gray-800">
          {NavbarData.map((navbar) => (
            <Link
              key={navbar.path}
              to={navbar.path}
              className="block text-lg hover:text-gray-600"
              onClick={toggleSideNav}
            >
              {navbar.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
