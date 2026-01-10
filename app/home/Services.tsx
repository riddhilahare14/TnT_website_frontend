import Image from 'next/image';

const services = [
  {
    icon: '/icons/doorstep-grooming.png',
    title: 'Doorstep Grooming',
  },
  {
    icon: '/icons/health-vet.png',
    title: 'Health & Vet Care',
  },
  {
    icon: '/icons/training-behaviour.png',
    title: 'Training & Behaviour',
  },
  {
    icon: '/icons/pet-socialisation.png',
    title: 'Pet Socialisation',
  },
  {
    icon: '/icons/boarding-daycare.png',
    title: 'Boarding & Daycare',
  },
  {
    icon: '/icons/doorstep-grooming-2.png',
    title: 'Doorstep Grooming',
  }
];

export default function Services() {
  return (
    <section className="py-16 lg:py-24 bg-[#E8F0F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif text-[#1E3A5F] leading-tight">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        {/* CHANGE 1: Changed 'grid-cols-1' to 'grid-cols-2' for mobile view */}
        {/* CHANGE 2: Reduced gap for mobile (gap-4) while keeping large gap for desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-x-52 lg:gap-y-12 justify-items-center">
          {services.map((service, index) => (
            <div 
              key={index}
              // CHANGE 3: Responsive Sizing
              // Mobile: w-full (fits column) and h-[160px] (compact)
              // Desktop: w-[400px] and h-[200px] (original size)
              className="w-full md:w-[400px] h-[160px] md:h-[200px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center items-center relative p-2"
            >
              {/* Icon Container */}
              {/* CHANGE 4: Scaled down icon container for mobile (w-[90px]) vs desktop (w-[123px]) */}
              <div className="relative w-[90px] h-[72px] md:w-[123px] md:h-[98px] flex items-center justify-center mb-2 md:mb-4">
                
                {/* Background Ellipse */}
                <Image
                  src="/icons/Ellipse.png" 
                  alt="Background"
                  fill 
                  className="object-contain"
                />

                {/* Service Icon - Scaled for mobile */}
                <div className="relative z-10 w-[28px] h-[28px] md:w-[38px] md:h-[38px]">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title - Smaller text on mobile */}
              <h3 className="text-sm md:text-lg font-semibold text-[#1F2933] text-center px-1">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}