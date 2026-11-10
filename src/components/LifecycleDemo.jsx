
import { useEffect, useState } from "react";

export default function LifecycleDemo() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.title = show
      ? "CampusFlow - Tip"
      : "CampusFlow - Dashboard";

    return () => {
      document.title = "CampusFlow - Student Management";
    };
  }, [show]);

  return (
    <div className="content-card">
      <h3>React useEffect demonstration</h3>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide tip" : "Show tip"}
      </button>

      {show && <p>Your student records are saved in this browser.</p>}
    </div>
  );
}
