const philosophyItems = [
  {
    id: 1,
    text: 'Trained professional groomers',
  },
  {
    id: 2,
    text: 'Supervised vet professionals',
  },
  {
    id: 3,
    text: 'Calm handling culture',
  },
  {
    id: 4,
    text: 'Continuous learning & training',
  },
];

export default function TeamPhilosophy() {
  return (
    <section className="bg-white pt-4 pb-6 lg:pt-6 lg:pb-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-[24px] font-sans text-black mb-4 md:mb-6 text-left">
          Team Philosophy
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl">
          {philosophyItems.map((item) => (
            <div
              key={item.id}
              // CHANGE:
              // 1. Fixed width/height: 'w-full md:w-[361px]' and 'h-[52px]'
              // 2. Alignment: 'items-center' (instead of items-start) to center text vertically
              // 3. Removed 'py-5' (height is now fixed)
              className="bg-gray-200 rounded-xl px-6 h-[52px] w-full md:w-[361px] flex items-center gap-4 hover:shadow-lg transition-shadow duration-300"
            >
              <span className="text-[#1F2933] text-2xl leading-none font-bold">•</span>
              
              {/* CHANGE: Font size set to 'text-[18px]' */}
              <span className="text-[#1F2933] text-[18px] leading-snug">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}