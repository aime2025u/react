
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="content-card">
      <h1>404 - Page Not Found</h1>
      <p>The page you requested does not exist.</p>
      <Link to="/">Return to Dashboard</Link>
    </div>
  );
}
