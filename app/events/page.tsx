import EventList from "@/components/EventList";

export default function EventsPage() {
  return (
    <section className="section">
      <h1>Events</h1>
      <p>Check out upcoming and past events.</p>
      <EventList />
    </section>
  );
}