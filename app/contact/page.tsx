export default function ContactPage() {
  return (
    <section className="section">
      <h1>Contact / Help</h1>
      <p>Send your feedback or ask for help.</p>

      <form className="form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Your message..." rows={5} required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}