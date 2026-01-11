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
    <section className="py-16 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CHANGE 1: Layout Structure 
            - Mobile: 'flex flex-col' (Vertical stack)
            - Desktop: 'md:grid md:grid-cols-3' (Horizontal grid)
            - Added 'max-w-sm mx-auto' to center the list block on mobile screen
        */}
        <div className="flex flex-col gap-6 max-w-sm mx-auto md:max-w-none md:grid md:grid-cols-3 md:gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              // CHANGE 2: Item Alignment
              // - Mobile: 'flex items-center gap-4' (Icon left, Text right)
              // - Desktop: 'md:block md:text-center' (Icon top, Text bottom)
              className="flex items-center gap-4 md:flex-col md:justify-center md:gap-4"
            >
              
              {/* Icon Container */}
              <div className="flex-shrink-0 flex items-center justify-center md:mx-auto md:w-16 md:h-16">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  // CHANGE 3: Responsive Icon Size
                  // - Mobile: 'w-6 h-6' (Smaller, roughly 24px)
                  // - Desktop: 'md:w-12 md:h-12' (Original 48px)
                  className="w-6 h-6 md:w-12 md:h-12 object-contain"
                />
              </div>

              {/* Text */}
              {/* Added 'font-medium' for better legibility like the image */}
              <h3 className="text-base md:text-lg font-medium text-[#1F2933] text-left md:text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}