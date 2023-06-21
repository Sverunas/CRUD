import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Books from "./pages/Books.jsx";
import Categories from "./pages/Categories.jsx";
import Analytics from "./pages/Analytics.jsx";
import Comment from "./pages/Comment.jsx";
import Product from "./pages/Product.jsx";
import ProductList from "./pages/ProductList.jsx";
import Header from "./components/Header";
import Main from "./pages/Main";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/book" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
