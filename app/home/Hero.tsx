import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#E8F0F6] to-white py-12 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="space-y-6 text-center lg:text-left">
            
            {/* 1. Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-serif text-[#1E3A5F] leading-tight">
              Complete Pet Care, Built for a Lifetime.
            </h1>

            {/* 2. MOBILE IMAGE (Visible only on mobile/tablet) */}
            {/* Sandwiched between Heading and Description to match the image structure */}
            <div className="lg:hidden relative flex justify-center my-6">
              <div className="bg-[#EEB541] rounded-3xl overflow-hidden w-full max-w-[500px]">
                 <Image
                  src="/images/hero-pet-owners.png"
                  alt="Pet Care"
                  width={625}
                  height={469}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* 3. Description */}
            <p className="font-sans text-lg text-[#6B7280] max-w-lg mx-auto lg:mx-0">
              Delivered at your doorstep through customized care vans, with trust and bonding at the core.
            </p>
            
            {/* 4. Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Image 
                  src="/icons/app-store.svg" 
                  alt="Apple" 
                  width={20} 
                  height={20}
                />
                <span className="text-sm font-medium text-[#1F2933]">App Store</span>
              </button>
              <button className="flex items-center gap-2 bg-[#1F2933] px-6 py-3 rounded-lg hover:bg-[#2F3D4D] transition-colors">
                <Image 
                  src="/icons/play-store.svg" 
                  alt="Play Store" 
                  width={20} 
                  height={20}
                />
                <span className="text-sm font-medium text-white">Play Store</span>
              </button>
            </div>
          </div>

          {/* DESKTOP IMAGE COLUMN (Hidden on mobile) */}
          <div className="hidden lg:block relative">
            <div className="bg-[#EEB541] rounded-3xl overflow-hidden">
              <Image
                src="/images/hero-pet-owners.png"
                alt="Pet Care"
                width={625}
                height={469}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}