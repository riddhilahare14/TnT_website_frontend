import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#E8F0F6] to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADING (Centered at top) */}
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-serif text-[#1E3A5F] leading-tight">
            About Us
          </h1>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/about-hero.png"
              alt="Veterinarian and pet owner examining a dog"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* PARAGRAPH */}
          {/* CHANGE: Removed 'lg:text-left' so it remains 'text-center' on all screens */}
          <div className="text-center">
            <p className="text-[#1F2933] text-base md:text-lg leading-relaxed font-sans">
              We are a collective of veterinarians, behaviourists, and pet parents building a 
              new standard of care. We believe that caring for a pet should be as reliable 
              and seamless as possible, blending expert oversight with modern 
              convenience. Our mission is to replace anxiety with confidence through 
              transparent, high-quality service.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}