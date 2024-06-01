import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import MainPage from "../pages/Home/MainPage";
import BookCreateForm from "../pages/BookCreateForm/BookCreateForm";
import ErrorPage from "../pages/Error/ErrorPage";

// components
import Navbar from "../Components/Navbar/Navbar";

export default function AppRoutes() {
  return (
    <>
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/createbook" element={<BookCreateForm />} />
          
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
