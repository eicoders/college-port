import { timetables } from "@/data/timetables";

export default function TimetableList() {
  return (
    <div className="grid">
      {timetables.map((t) => (
        <div key={t.id} className="card">
          <h3>{t.department}</h3>
          <p>{t.semester}</p>
          <a href={t.link} target="_blank">View Timetable</a>
        </div>
      ))}
    </div>
  );
}