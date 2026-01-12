import Image from 'next/image';

const features = [
  {
    icon: '/icons/eternal-pet-care/1.svg',
    title: 'Early Bonding',
    description: 'Nurture • Foundation • Growth'
  },
  {
    icon: '/icons/eternal-pet-care/2.svg',
    title: 'Training & Socialization',
    description: 'Exploration • Learning • Play'
  },
  {
    icon: '/icons/eternal-pet-care/3.svg',
    title: 'Active Wellness',
    description: 'Health • Energy • Strength'
  },
  {
    icon: '/icons/eternal-pet-care/4.svg',
    title: 'Senior Comfort',
    description: 'Care • Support • Golden Years',
    highlight: true
  }
];

export default function Features() {
  return (
    // CHANGE: Reduced top padding (pt-4) and added tight bottom padding (pb-4)
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-4 lg:pt-8 lg:pb-8">
      {/* CHANGE: Reduced mobile gap from 'gap-10' to 'gap-6' */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="text-center space-y-1 lg:space-y-3"
          >
            {/* Icon Container */}
            <div className="mx-auto flex items-center justify-center mb-1 lg:mb-2">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={44}
                height={44}
                className="object-contain w-[30px] h-[30px] lg:w-[44px] lg:h-[44px]"
              />
            </div>
            
            {/* Title */}
            <h3 className="font-sans font-semibold text-[16px] lg:text-[18px] text-[#374151]">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="font-sans text-[14px] text-[#4B5563]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}