
import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <aside className="sidebar">
      <h2 className="logo">CampusFlow</h2>

      <nav>
        <NavLink to="/" end>
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>

        <NavLink to="/students">
          <Users size={18} /> Students
        </NavLink>
      </nav>

      <button className="logout" onClick={handleLogout}>
        <LogOut size={18} /> Sign out
      </button>
    </aside>
  );
}
