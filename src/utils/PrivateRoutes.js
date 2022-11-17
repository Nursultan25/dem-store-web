import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const isLogged = useSelector((state) => state.reducer.isLogged);

  let auth = { token: localStorage.getItem("token") };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
