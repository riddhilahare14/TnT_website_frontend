import Image from 'next/image';

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    icon: string;
    subtitle: string;
    image: string;
    features: string[];
    description: string;
    imagePosition?: string;
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const isImageLeft = index % 2 === 0;

  return (
    // OUTER CONTAINER
    <div 
      // CHANGE 1: Added id here so the Footer links (e.g. #doorstep-grooming) can find this section
      id={service.id} 
      // CHANGE 2: Added 'scroll-mt-32' so it doesn't scroll behind the sticky navbar
      className={`
        scroll-mt-32 
        bg-white rounded-[32px] shadow-xl max-w-md mx-auto p-6
        lg:p-0 lg:bg-transparent lg:shadow-none lg:rounded-none lg:max-w-none lg:overflow-visible
        lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center font-sans
        ${!isImageLeft ? 'lg:grid-flow-dense' : ''}
      `}
    >
      
      {/* IMAGE SECTION */}
      <div className={`
        relative w-full h-[250px] sm:h-[300px] rounded-2xl shadow-none overflow-hidden
        lg:h-auto lg:aspect-[540/346] lg:rounded-[32px]
        ${!isImageLeft ? 'lg:col-start-2' : ''}
      `}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT SECTION */}
      <div className={`
        mt-6 text-center
        lg:mt-0 lg:text-left
        ${!isImageLeft ? 'lg:col-start-1 lg:row-start-1' : ''}
      `}>
        <div className="space-y-6">
          
          {/* Title & Icon */}
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <h2 className="text-[24px] font-bold text-[#1F2933]">
              {service.title}
            </h2>
            <div className="relative w-8 h-8 flex-shrink-0">
              <Image 
                src={service.icon} 
                alt={`${service.title} icon`}
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-[#2F5F88] text-sm lg:text-base font-medium">
            {service.subtitle}
          </p>

          {/* Features List */}
          <ul className="space-y-3 text-left inline-block lg:block">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[#1F2933]">
                <span className="text-black text-xs mt-1.5">●</span> 
                <span className="text-sm lg:text-base font-medium text-gray-800">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* Description */}
          <p className="text-[#9CA3AF] text-xs lg:text-sm">
            {service.description}
          </p>

          {/* Button */}
          <button className="flex items-center justify-center gap-2 bg-[#2F5F88] text-white px-6 py-3 rounded-lg hover:bg-[#1E3A5F] transition-colors text-sm font-medium shadow-sm w-full lg:w-auto">
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" 
              />
            </svg>
            Book via the App
          </button>
        </div>
      </div>
    </div>
  );
}