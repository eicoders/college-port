import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "College Port",
  description: "BSc/Arts Students Portal - Notes, Events, Results, Timetable",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}