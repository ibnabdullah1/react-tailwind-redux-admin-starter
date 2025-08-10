import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loading from "../components/shared/Loading";
import {
  logout,
  selectCurrentUser,
  setProfile,
  setRole,
} from "../redux/features/auth/authSlice";
import { useMyProfileQuery } from "../redux/features/user/userApi";

interface ProtectedRouteProps {
  roles?: string[];
  children?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roles, children }) => {
  const dispatch = useDispatch();
  const user: any = useSelector(selectCurrentUser);
  const { data, isLoading } = useMyProfileQuery(undefined);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (isLoading) {
    return <Loading text="Loading..." />;
  }

  if (data?.data?.isActive === false || !data?.data?.isActive) {
    dispatch(logout());
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (data?.data?.profilePhoto) {
    dispatch(setProfile(data.data.profilePhoto));
  }

  if (data?.data?.role) {
    dispatch(setRole(data.data.role));
  }
  if (roles && !roles.includes(user?.role)) {
    dispatch(logout());
    return <Navigate to="/404" replace />;
  }

  if (user?.email) {
    return <>{children}</>;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;
