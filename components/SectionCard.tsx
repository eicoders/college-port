import Link from "next/link";

export default function SectionCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href} className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}