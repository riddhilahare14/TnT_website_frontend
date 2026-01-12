import Image from 'next/image';

const principles = [
  {
    id: 1,
    text: 'Life cycle-based care',
    icon: '/icons/aboutus/1.svg',
  },
  {
    id: 2,
    text: 'Prevention over reaction',
    icon: '/icons/aboutus/2.svg',
  },
  {
    id: 3,
    text: 'Trust over transactions',
    icon: '/icons/aboutus/3.svg',
  },
  {
    id: 4,
    text: 'Quality before scale',
    icon: '/icons/aboutus/4.svg',
  },
];

export default function HowWeThink() {
  return (
    <section className="bg-[#E8F0F6] py-8 lg:py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* CHANGE: Added 'lg:text-left' so it aligns left on desktop, while staying centered on mobile */}
        <h2 className="text-[20px] lg:text-[24px] font-sans font-semibold text-black mb-4 md:mb-6 text-center lg:text-left">
          How We Think
        </h2>
        
        <div className="flex flex-col items-center sm:flex-row sm:flex-wrap justify-center gap-4 md:gap-6">
          {principles.map((principle) => (
            <div
              key={principle.id}
              className="bg-[#2F5F88] text-white rounded-xl w-[281px] h-[50px] px-4 flex items-center justify-center gap-3 shadow-lg"
            >
              <span className="text-sm md:text-base font-sans font-medium leading-snug">
                {principle.text}
              </span>

              <div className="w-5 h-5 flex-shrink-0 relative">
                <Image
                  src={principle.icon}
                  alt={`${principle.text} icon`}
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}