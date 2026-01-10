import Hero from './home/Hero';
//import EternalPetCare from './home/EternalPetCare';
//import Features from './home/Features';
import Services from './home/Services';
import SafeStressFree from './home/SafeStressFree';
import CarePlans from './home/CarePlans';
import TrustSection from './home/TrustSection';
import AppDownload from './home/AppDownload';
import CombinedCareSection from './Components/home/CombinedCareSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <Hero />
      <CombinedCareSection />
      <Services />
      <SafeStressFree />
      <CarePlans />
      <TrustSection />
      <AppDownload />
    </main>
  );
}