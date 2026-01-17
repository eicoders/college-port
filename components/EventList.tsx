import { events } from "@/data/events";

export default function EventList({ limit }: { limit?: number }) {
  const items = limit ? events.slice(0, limit) : events;
  return (
    <div className="grid">
      {items.map((e) => (
        <div key={e.id} className="card">
          <h3>{e.title}</h3>
          <p>{e.date} • {e.venue}</p>
          <p>{e.description}</p>
        </div>
      ))}
    </div>
  );
}