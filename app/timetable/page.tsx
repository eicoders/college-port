import TimetableList from "@/components/TimetableList";

export default function TimetablePage() {
  return (
    <section className="section">
      <h1>Time Tables</h1>
      <p>Latest timetables for each department.</p>
      <TimetableList />
    </section>
  );
}