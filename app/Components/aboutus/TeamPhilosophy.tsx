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
        {/* CHANGE: 
            1. Desktop text alignment -> lg:text-left 
            2. Desktop font size -> lg:text-[24px]
        */}
        <h2 className="text-[20px] lg:text-[24px] font-sans font-semibold text-black mb-4 md:mb-6 text-center lg:text-left">
          Team Philosophy
        </h2>
        
        {/* CHANGE: 
            1. Removed 'mx-auto' to prevent centering the grid container. It now aligns left.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl">
          {philosophyItems.map((item) => (
            <div
              key={item.id}
              // CHANGE: 
              // 1. Removed 'mx-auto' so the cards align to the start of their grid columns.
              className="bg-gray-200 rounded-xl pl-10 md:pl-14 pr-4 h-[52px] w-full md:w-[361px] flex items-center justify-start gap-4 hover:shadow-lg transition-shadow duration-300 font-sans"
            >
              <span className="text-[#1F2933] text-2xl leading-none font-bold">•</span>
              
              <span className="text-[#1F2933] text-[14px] leading-snug">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}