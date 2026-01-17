import NotesGrid from "@/components/NotesGrid";

export default function NotesPage() {
  return (
    <section className="section">
      <h1>Notes</h1>
      <p>Download notes by course, year, and semester.</p>
      <NotesGrid />
    </section>
  );
}