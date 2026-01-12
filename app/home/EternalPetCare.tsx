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
        {/* CHANGE: Desktop font size set to 54px */}
        <h2 className="text-[32px] md:text-5xl lg:text-[32px] font-serif text-[#1E3A5F] leading-tight mb-2">
          Eternal Pet Care
        </h2>
        <p className="font-sans text-[14px] lg:text-lg text-[#4B5563]">
          Care that grows with your pet
        </p>
      </div>

      {/* Testimonials Section */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((item, index) => {
          // Determine if this is an even or odd row for the zig-zag effect on mobile
          const isReverse = index % 2 !== 0;

          return (
            <div 
              key={index} 
              className={`flex ${isReverse ? 'flex-row-reverse' : 'flex-row'} text-left md:block items-center gap-4 md:text-center`}
            >
              {/* Image Container */}
              <div className="w-1/2 md:w-auto relative rounded-3xl overflow-hidden md:mb-6 md:flex md:justify-center">
                <Image
                  src={item.image}
                  alt={`Pet testimonial ${index + 1}`}
                  width={348}
                  height={276}
                  className="object-cover w-full h-auto" 
                />
              </div>

              {/* Text Container */}
              <div className="w-1/2 md:w-auto md:mx-auto">
                {/* CHANGE: 
                    1. Desktop text size -> md:text-[18px]
                    2. Color -> Darker #374151
                    3. Max-width -> max-w-[200px] to force two lines on desktop
                */}
                <p className="font-sans text-[#374151] text-[16px] md:text-[18px] italic md:max-w-[200px] md:mx-auto leading-snug">
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