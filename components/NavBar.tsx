import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="container">
        <h2>College Port</h2>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/events">Events</Link>
          <Link href="/notice-board">Notice Board</Link>
          <Link href="/results">Results</Link>
          <Link href="/timetable">Timetable</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}