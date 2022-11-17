import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authorisation from "./pages/Authorization";
import Category from "./pages/Category";
import Products from "./pages/Products";
import Users from "./pages/Users";
import PrivateRoutes from "./utils/PrivateRoutes";
import Prices from "./pages/Prices";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/prices" element={<Prices />} />
        </Route>
        <Route path="/" element={<Home  />} exact={true} />
        <Route path="/login" element={<Authorisation />} />
      </Routes>
    </Router>
  );
}

export default App;
