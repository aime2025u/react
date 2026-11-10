
export default function StatsCard({ title, value, color }) {
  return (
    <div className="stats-card">
      <span>{title}</span>
      <h2 style={{ color }}>{value}</h2>
    </div>
  );
}
