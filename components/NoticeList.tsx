import { notices } from "@/data/notices";

export default function NoticeList({ limit }: { limit?: number }) {
  const items = limit ? notices.slice(0, limit) : notices;
  return (
    <div className="grid">
      {items.map((n) => (
        <div key={n.id} className="card">
          <h3>{n.title}</h3>
          <p>{n.date}</p>
          <p>{n.category}</p>
        </div>
      ))}
    </div>
  );
}