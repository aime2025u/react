
import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="header">
      <h3>Student Management Dashboard</h3>
      <span>Administrator: {user?.email}</span>
    </header>
  );
}
