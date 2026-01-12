import Image from 'next/image';
import EternalPetCare from '../../home/EternalPetCare';
import Features from '../../home/Features';

export default function CombinedCareSection() {
  return (
    <section className="pt-8 pb-8 lg:pt-12 lg:pb-12 bg-white relative overflow-hidden">
      
      {/* Background Logo with Low Opacity */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        
        {/* CHANGE: Changed 'w-full px-24' to 'w-[60%]' 
            This forces the container to only be 60% of the screen width, 
            guaranteeing it cannot touch the edges. */}
        <div className="relative w-[96%] h-full max-w-2xl opacity-5 mt-64 lg:mt-10 lg:w-full lg:px-0">
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