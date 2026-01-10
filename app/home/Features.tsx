import Image from 'next/image';

const features = [
  {
    icon: '/icons/easy-bonding.png',
    title: 'Early Bonding',
    description: 'Nurture • Foundation • Growth'
  },
  {
    icon: '/icons/training.png',
    title: 'Training & Socialization',
    description: 'Exploration • Learning • Play'
  },
  {
    icon: '/icons/active-wellness.png',
    title: 'Active Wellness',
    description: 'Health • Energy • Strength'
  },
  {
    icon: '/icons/care-support.png',
    title: 'Senior Comfort',
    description: 'Care • Support • Golden Years',
    highlight: true
  }
];

export default function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 lg:pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="text-center space-y-3"
          >
            {/* Icon Container */}
            <div className="mx-auto flex items-center justify-center mb-2">
              <Image
                src={feature.icon}
                alt={feature.title}
                // CHANGE: Decreased size from 80 to 64
                width={44}
                height={44}
                className="object-contain"
              />
            </div>
            
            <h3 className="font-sans text-[18px] font-normal text-[#1F2933]">
              {feature.title}
            </h3>

            <p className="font-sans text-[14px] text-[#6B7280]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}