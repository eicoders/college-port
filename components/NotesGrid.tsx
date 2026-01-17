import { notes } from "@/data/notes";

export default function NotesGrid() {
  return (
    <div className="grid">
      {notes.map((n) => (
        <div key={n.id} className="card">
          <h3>{n.subject}</h3>
          <p>{n.course} • {n.semester}</p>
          <a href={n.link} target="_blank">Download</a>
        </div>
      ))}
    </div>
  );
}