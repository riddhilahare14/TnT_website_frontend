import Image from 'next/image';

const trustItems = [
  {
    icon: '/icons/plan-offers/1.svg',
    title: 'Certified Professionals'
  },
  {
    icon: '/icons/plan-offers/2.svg',
    title: 'Structured Care'
  },
  {
    icon: '/icons/plan-offers/3.svg',
    title: 'Delivered with responsibility'
  }
];

export default function TrustSection() {
  return (
    // CHANGE 1: Reduced padding from 'py-16' to 'py-8' for mobile
    <section className="py-8 lg:py-16 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Structure */}
        {/* CHANGE 2: Used 'max-w-fit' so the container hugs the content and centers it perfectly */}
        <div className="flex flex-col gap-6 max-w-fit mx-auto md:max-w-none md:grid md:grid-cols-3 md:gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 md:flex-col md:justify-center md:gap-4"
            >
              
              {/* Icon Container */}
              <div className="flex-shrink-0 flex items-center justify-center md:mx-auto md:w-16 md:h-16">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="w-6 h-6 md:w-12 md:h-12 object-contain"
                />
              </div>

              {/* Text */}
              {/* CHANGE 3: Added 'font-sans', set size to 'text-[16px]', and 'font-semibold' */}
              <h3 className="font-sans text-[16px] md:text-lg font-semibold text-black text-left md:text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section> 
  );
}