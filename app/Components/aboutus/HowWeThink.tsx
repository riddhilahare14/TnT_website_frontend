import Image from 'next/image';

const principles = [
  {
    id: 1,
    text: 'Life cycle-based care',
    icon: '/images/icons/lifecycle-icon.png',
  },
  {
    id: 2,
    text: 'Prevention over reaction',
    icon: '/images/icons/prevention-icon.png',
  },
  {
    id: 3,
    text: 'Trust over transactions',
    icon: '/images/icons/trust-icon.png',
  },
  {
    id: 4,
    text: 'Quality before scale',
    icon: '/images/icons/quality-icon.png',
  },
];

export default function HowWeThink() {
  return (
    <section className="bg-[#E8F0F6] py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-serif text-[#1E3A5F] mb-8 md:mb-12 text-left">
          How We Think
        </h2>
        
        {/* CHANGE: Updated layout classes */}
        {/* 'flex-col items-center': Stacks them vertically and centers them on Mobile */}
        {/* 'sm:flex-row sm:flex-wrap': Switches back to horizontal wrapping on larger screens */}
        <div className="flex flex-col items-center sm:flex-row sm:flex-wrap gap-4 md:gap-6">
          {principles.map((principle) => (
            <div
              key={principle.id}
              className="bg-[#2F5F88] text-white rounded-xl w-[281px] h-[60px] px-4 flex items-center justify-center gap-3"
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