import Image from "next/image";

const services = [
  {
    icon: "/icons/home-services/1.svg",
    title: "Doorstep Grooming",
  },
  {
    icon: "/icons/home-services/2.svg",
    title: "Health & Vet Care",
  },
  {
    icon: "/icons/home-services/3.svg",
    title: "Training & Behaviour",
  },
  {
    icon: "/icons/home-services/4.svg",
    title: "Pet Socialisation",
  },
  {
    icon: "/icons/home-services/5.svg",
    title: "Boarding & Daycare",
  },
  {
    icon: "/icons/home-services/6.svg",
    title: "Doorstep Grooming",
  },
];

export default function Services() {
  return (
    <section className="py-8 lg:py-8 bg-[#E8F0F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-6 lg:mb-12">
          <h2 className="text-[32px] md:text-4xl lg:text-[32px] font-serif text-[#1E3A5F] leading-tight">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-x-52 lg:gap-y-12 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full md:w-[400px] h-[140px] md:h-[200px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center items-center p-2"
            >
              
              {/* Combined Icon */}
              <div className="relative w-[90px] h-[72px] md:w-[123px] md:h-[98px] mb-2 md:mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="font-sans text-[14px] md:text-lg font-semibold text-[#1F2933] text-center px-1">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
