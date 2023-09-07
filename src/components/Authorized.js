import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginSelector } from "../redux/slice/login";

const Authorized = ({ component: Component }) => {
  const location = useLocation();
  const user = useSelector(loginSelector.currentUser);

  const noPermission = () => {
    alert("Can not access data, please contact the administrator")
    return <Navigate to="/"></Navigate>
  }

  return user !== null && user?.roles.includes("ROLE_ADMIN") ? (
    <Component />
  ) : noPermission()
};
export default Authorized;
