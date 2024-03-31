import Cards from "@/components/Cards";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ScrollPage from "@/components/ScrollPage";


 export default function Home() {
  return (
   <>
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <HeroSection/>
      <Cards/>
      <ScrollPage/>
  </main>
   </>
  );
}


