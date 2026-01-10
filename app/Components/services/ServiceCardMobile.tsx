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
    imagePosition: 'left' | 'right';
    bgColor?: string;
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const isImageLeft = service.imagePosition === 'left';

  return (
    <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
      !isImageLeft ? 'lg:grid-flow-dense' : ''
    }`}>
      {/* Image */}
      <div className={`${!isImageLeft ? 'lg:col-start-2' : ''}`}>
        <div className={`relative rounded-3xl overflow-hidden shadow-lg ${
          service.bgColor || 'bg-white'
        }`}>
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={450}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Content */}
      <div className={`${!isImageLeft ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
        <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2933]">
              {service.title}
            </h2>
            <span className="text-xl">{service.icon}</span>
          </div>
          
          <p className="text-[#2F5F88] text-sm lg:text-base mb-6">
            {service.subtitle}
          </p>

          <ul className="space-y-3 mb-6">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[#1F2933]">
                <span className="text-[#2F5F88] mt-1">•</span>
                <span className="text-sm lg:text-base">{feature}</span>
              </li>
            ))}
          </ul>

          <p className="text-[#6B7280] text-xs lg:text-sm mb-6">
            {service.description}
          </p>

          <button className="flex items-center gap-2 bg-[#2F5F88] text-white px-6 py-3 rounded-lg hover:bg-[#1E3A5F] transition-colors text-sm font-medium">
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
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" 
              />
            </svg>
            Book via the App
          </button>
        </div>
      </div>
    </div>
  );
}