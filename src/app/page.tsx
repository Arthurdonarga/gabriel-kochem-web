import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Footer"; // Reusing Footer file which exports Contact for now or Rename

export default function Home() {
  return (
    <main className="min-h-screen bg-navy text-white selection:bg-gold selection:text-navy">
      <Header />
      <Hero />
      <Services />
      <Contact />
    </main>
  );
}
