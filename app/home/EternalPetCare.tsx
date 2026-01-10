import Image from 'next/image';

const testimonials = [
  {
    image: '/images/pet-1.png',
    text: '"We start gently, so trust comes naturally."'
  },
  {
    image: '/images/pet-2.png',
    text: '"We track what changes, so nothing is missed."'
  },
  {
    image: '/images/pet-3.png',
    text: '"We adjust care as their needs change."'
  }
];

export default function EternalPetCare() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 lg:pb-12">
      {/* Header */}
      <div className="text-center mb-8 lg:mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif text-[#1E3A5F] leading-tight">
          Eternal Pet Care
        </h2>
        <p className="text-lg text-[#6B7280]">
          Care that grows with your pet
        </p>
      </div>

      {/* Testimonials Section */}
      {/* CHANGE: Changed main container from simple grid to flex-col for mobile, grid for desktop */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((item, index) => {
          // Determine if this is an even or odd row for the zig-zag effect
          const isReverse = index % 2 !== 0;

          return (
            <div 
              key={index} 
              // CHANGE: Complex class styling for mobile zig-zag vs desktop stacked center
              // Mobile: flex row (or reversed row), items centered vertically, gap between image/text.
              // Desktop (md:): reset to block display, text centered.
              className={`flex ${isReverse ? 'flex-row-reverse text-right' : 'flex-row text-left'} md:block items-center gap-4 md:text-center`}
            >
              {/* Image Container */}
              {/* CHANGE: w-1/2 on mobile for side-by-side. md:w-auto and centering for desktop. */}
              <div className="w-1/2 md:w-auto relative rounded-3xl overflow-hidden md:mb-6 md:flex md:justify-center">
                <Image
                  src={item.image}
                  alt={`Pet testimonial ${index + 1}`}
                  width={348}
                  height={276}
                  // CHANGE: Added w-full h-auto so it scales correctly in the mobile w-1/2 container
                  className="object-cover w-full h-auto" 
                />
              </div>

              {/* Text Container */}
              {/* CHANGE: Wrapped text in a div that is w-1/2 on mobile. */}
              <div className="w-1/2 md:w-auto md:max-w-xs md:mx-auto">
                <p className="text-[#6B7280] text-sm italic">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}