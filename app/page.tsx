import Hero from "@/components/Hero";
import SectionCard from "@/components/SectionCard";
import NoticeList from "@/components/NoticeList";
import EventList from "@/components/EventList";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="grid">
        <SectionCard
          title="Notes"
          description="Download semester-wise notes for BSc/Arts."
          href="/notes"
        />
        <SectionCard
          title="Results"
          description="Check results by year/semester."
          href="/results"
        />
        <SectionCard
          title="Timetable"
          description="View updated timetables."
          href="/timetable"
        />
        <SectionCard
          title="Notice Board"
          description="Latest academic notices."
          href="/notice-board"
        />
        <SectionCard
          title="Events"
          description="Upcoming college events."
          href="/events"
        />
        <SectionCard
          title="Contact"
          description="Get help or send feedback."
          href="/contact"
        />
      </div>

      <section className="section">
        <h2>Latest Notices</h2>
        <NoticeList limit={4} />
      </section>

      <section className="section">
        <h2>Upcoming Events</h2>
        <EventList limit={3} />
      </section>
    </>
  );
}