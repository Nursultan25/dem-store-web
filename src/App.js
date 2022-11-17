import { React } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authorisation from "./pages/Authorization";
import Category from "./pages/Category";
import Products from "./pages/Products";
import Users from "./pages/Users";
import PrivateRoutes from "./utils/PrivateRoutes";
import Prices from "./pages/Prices";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/category" element={<Category />} exact={true} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/prices" element={<Prices />} />
        </Route>
        <Route path="/login" element={<Authorisation />} />
      </Routes>
    </Router>
  );
}

export default App;
