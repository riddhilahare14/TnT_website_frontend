import Image from 'next/image';

const principles = [
  {
    id: 1,
    title: 'Life cycle-based care',
    description: 'We support your pet at every stage, from puppyhood to senior care.',
    icon: '/icons/aboutus/1.svg',
  },
  {
    id: 2,
    title: 'Prevention over reaction',
    description: 'We focus on preventing problems before they become emergencies.',
    icon: '/icons/aboutus/2.svg',
  },
  {
    id: 3,
    title: 'Trust over transactions',
    description: 'We build relationships that grow with your pet.',
    icon: '/icons/aboutus/3.svg',
  },
  {
    id: 4,
    title: 'Quality before scale',
    description: 'We grow carefully, without compromising the care we deliver.',
    icon: '/icons/aboutus/4.svg',
  },
];

export default function HowWeThink() {
  return (
    <section className="bg-[#E8F0F6] py-4 md:py-6 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading: 24px (text-2xl) on mobile, scaling up to 40px on desktop */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-serif text-[#2F5F88] leading-tight pb-6 text-center">
          How We Think
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-1">
          {principles.map((principle) => (
            <div key={principle.id} className="flex flex-col items-center max-w-[260px] mx-auto py-1 text-center">
              <div className="mb-1 h-10 w-10 flex items-center justify-center">
                <Image
                  src={principle.icon}
                  alt=""
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>

              {/* Title: 16px on mobile, 18px on desktop */}
              <h3 className="text-black text-[16px] md:text-[18px] font-sans font-normal mb-0.5 leading-tight">
                {principle.title}
              </h3>

              {/* Description: Stays at 14px as requested */}
              <p className="text-[#333333] text-[14px] font-sans leading-snug px-2">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}