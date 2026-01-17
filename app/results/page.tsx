import ResultSearch from "@/components/ResultSearch";

export default function ResultsPage() {
  return (
    <section className="section">
      <h1>Results</h1>
      <p>Search results by roll number or browse by semester.</p>
      <ResultSearch />
    </section>
  );
}