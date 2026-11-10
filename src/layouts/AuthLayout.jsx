
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AuthLayout() {
  const { user } = useAuth();

  if (user) return <Navigate to="/" replace />;

  return (
    <div className="auth-layout">
      <div className="auth-brand">
        <h1>CampusFlow</h1>
        <p>Your campus. Your students. One simple system.</p>
      </div>

      <div className="auth-content">
        <Outlet />
      </div>
    </div>
  );
}
