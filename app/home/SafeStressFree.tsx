import Image from 'next/image';

const facilities = [
  '/images/facility-1.jpeg',
  '/images/facility-2.jpeg',
  '/images/facility-3.jpeg',
  '/images/facility-4.jpeg'
];

export default function SafeStressFree() {
  return (
    <section className="pt-8 pb-8 lg:pt-24 lg:pb-12 bg-white flex flex-col">
      
      {/* --- BLOCK 1: HEADING --- */}
      <div className="order-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <h2 className="text-3xl md:text-4xl lg:text-[32px] font-serif text-[#1F2933] mb-5 lg:mb-3">
          Designed for Safe, Stress-Free Pet Care
        </h2>
      </div>

      {/* --- BLOCK 2: TEXT PARAGRAPH --- */}
      <div className="order-3 lg:order-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full lg:mb-12">
        <p className="font-sans text-[16px] lg:text-lg text-[#4B5563]">
          Where grooming, checkups, and care happen calmly and safely.
        </p>
      </div>

      {/* --- BLOCK 3: SCROLLABLE IMAGES --- */}
      <div className="order-2 lg:order-3 w-full mb-4 lg:mb-0">
        
        {/* Scroll Hint Text */}
        {/* CHANGE: Removed 'lg:hidden' so it shows on desktop too */}
        <p className="text-center text-xs text-gray-400 mb-3 font-sans italic">
          &larr; Swipe to view &rarr;
        </p>

        <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex gap-4 md:gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 pb-4 lg:pb-8">
            {facilities.map((facility, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[65vw] sm:w-[50vw] md:w-[38vw] lg:w-[32vw] rounded-2xl overflow-hidden"
              >
                <Image
                  src={facility}
                  alt={`Facility ${index + 1}`}
                  width={390}
                  height={260}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}