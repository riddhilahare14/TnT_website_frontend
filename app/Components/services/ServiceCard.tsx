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
      id={service.id} 
      className={`
        scroll-mt-32 
        bg-white rounded-2xl shadow-xl w-full mx-auto p-4
        lg:p-0 lg:bg-transparent lg:shadow-none lg:rounded-none lg:max-w-none lg:overflow-visible
        lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center font-sans
        ${!isImageLeft ? 'lg:grid-flow-dense' : ''}
      `}
    >
      
      {/* IMAGE SECTION */}
      <div className={`
        relative w-full h-[180px] sm:h-[220px] rounded-xl shadow-none overflow-hidden
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
        mt-3 text-center
        lg:mt-0 lg:text-left
        ${!isImageLeft ? 'lg:col-start-1 lg:row-start-1' : ''}
      `}>
        <div className="space-y-3 lg:space-y-6">
          
          {/* Title & Icon */}
          <div className="flex items-center justify-center lg:justify-start gap-2 lg:gap-3">
            <h2 className="text-[20px] lg:text-[24px] font-bold text-[#1F2933] font-sans">
              {service.title}
            </h2>
            <div className="relative w-6 h-6 lg:w-8 lg:h-8 flex-shrink-0">
              <Image 
                src={service.icon} 
                alt={`${service.title} icon`}
                fill
                className="object-contain"
              />
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-[#2F5F88] text-[14px] lg:text-base font-medium font-sans leading-tight">
            {service.subtitle}
          </p>

          {/* Features List */}
          <ul className="space-y-1.5 text-left inline-block lg:block">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[#1F2933]">
                <span className="text-black text-[10px] mt-1.5">●</span> 
                {/* CHANGE: Updated text color to #374151 */}
                <span className="text-[14px] lg:text-base font-medium text-[#374151] font-sans leading-tight">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* Description */}
          {/* CHANGE: Updated text color to #374151 */}
          <p className="text-[#374151] text-[12px] lg:text-sm font-sans leading-tight">
            {service.description}
          </p>

          {/* Button */}
          <button className="flex items-center justify-center gap-2 bg-[#2F5F88] text-white px-6 py-2.5 rounded-lg hover:bg-[#1E3A5F] transition-colors text-[14px] font-medium shadow-sm w-full lg:w-auto font-sans">
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
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