import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { useLocation, Navigate } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  let location = useLocation();
  if (loading || isAdminLoading) {
    return <p>Loading...</p>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
