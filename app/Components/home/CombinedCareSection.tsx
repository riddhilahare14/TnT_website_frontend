import Image from 'next/image';
import EternalPetCare from '../../home/EternalPetCare';
import Features from '../../home/Features';

export default function CombinedCareSection() {
  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-white relative overflow-hidden">
      
      {/* Background Logo with Low Opacity */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        
        {/* CHANGE: Set to 'mt-[26rem]' (equivalent to mt-104) */}
        <div className="relative w-full h-full max-w-2xl opacity-5 mt-[26rem] lg:mt-10 px-8 lg:px-0">
          <Image
            src="/logo.png"
            alt="Background Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <EternalPetCare />
        <Features />
      </div>
    </section>
  );
}