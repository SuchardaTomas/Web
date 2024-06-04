import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import MainPage from "../pages/Home/MainPage";
import ErrorPage from "../pages/Error/ErrorPage";
import Products from "../pages/Products/Products";
import Book from "../pages/Products/Book";

// components
import Navbar from "../Components/Navbar/Navbar";
import { Login } from "../pages/auth/Login";

export default function AppRoutes() {
  return (
    <>
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/knížky" element={<Products />} />
          <Route path="/knížky/:name/:id" element={<Book />}/>

          <Route path="/login" element={<Login />}/>
          
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
