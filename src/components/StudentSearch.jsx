
export default function StudentSearch({ search, setSearch }) {
  return (
    <input
      className="search-input"
      type="search"
      placeholder="Search by name, email or course..."
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  );
}
