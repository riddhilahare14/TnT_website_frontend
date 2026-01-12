import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-[#E8F0F6] to-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* GRID CONTAINER */}
        {/* CHANGE: Reduced mobile gap from 'gap-8' to 'gap-3' to tighten space between Title and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-16 items-center">
          
          {/* IMAGE COLUMN */}
          <div className="rounded-2xl overflow-hidden shadow-lg w-full order-2 lg:order-1">
            <Image
              src="/images/about-hero.png"
              alt="Veterinarian and pet owner examining a dog"
              width={456}
              height={304}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* TEXT WRAPPER */}
          <div className="contents lg:flex lg:flex-col lg:items-center lg:order-2 text-center">
            
            {/* HEADING */}
            <h1 className="order-1 lg:order-none text-[32px] lg:text-[56px] font-serif text-[#1E3A5F] leading-tight text-center mb-0 lg:mb-6">
              About Us
            </h1>

            {/* PARAGRAPH */}
            {/* Added 'mt-2' (margin-top) on mobile to ensure the text isn't too close to the image, since we reduced the global gap */}
            <p className="order-3 lg:order-none text-[#1F2933] text-[16px] md:text-lg leading-relaxed font-sans max-w-lg text-center mt-2 lg:mt-0">
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