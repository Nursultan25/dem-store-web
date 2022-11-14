import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authorisation from "./pages/Authorization";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Users from "./pages/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authorisation" element={<Authorisation />} />
        <Route path="/category" element={<Category />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
