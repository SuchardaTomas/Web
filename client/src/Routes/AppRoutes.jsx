import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import MainPage from "../pages/Home/MainPage";
import ErrorPage from "../pages/Error/ErrorPage";
import Products from "../pages/Products/Products";
import Book from "../pages/Products/Book";

import CreateBook from "../pages/Admin/CreateBook";
import UpdateBook from "../pages/Admin/UpdateBook";

// components
import Navbar from "../Components/Navbar/Navbar";
import MainPageAdmin from "../pages/Admin/MainPageAdmin";
import SearchResults from "../pages/Products/SearchResults";
import Footer from "../Components/Footer/Footer";
import Cart from "../pages/Cart/Cart";

export default function AppRoutes() {
  return (
    <>
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/knížky" element={<Products />} />
          <Route path="/knížky/:name/:id" element={<Book />}/>
          <Route path="/search" element={<SearchResults />}/>
          <Route path="/nakup" element={<Cart/>}/>

          <Route path="/admin" element={<MainPageAdmin />}/>
          <Route path="/admin/createbook" element={<CreateBook />} />
          <Route path="/admin/updatebook" element={<UpdateBook />}/>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
