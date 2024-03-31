import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import Navbar from "@/components/Navbar";
import ScrollCards from "@/components/ScrollCards";
import ScrollPage from "@/components/ScrollPage";
import UpcominWebinars from "@/components/UpcominWebinars";


 export default function Home() {
  return (
   <>
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
      <HeroSection/>
      <Cards/>
      <ScrollPage/>
      <ScrollCards/>
      <UpcominWebinars/>
      <Instructors/>
      <Footer/>
  </main>
   </>
  );
}


