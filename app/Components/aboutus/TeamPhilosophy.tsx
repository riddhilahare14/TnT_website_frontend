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
    <section className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-serif text-[#1E3A5F] mb-8 md:mb-12 text-left">
          Team Philosophy
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl">
          {philosophyItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-200 rounded-xl px-6 py-5 flex items-start gap-4"
            >
              <span className="text-[#1F2933] text-2xl leading-none mt-[-4px] font-bold">•</span>
              <span className="text-[#1F2933] text-sm md:text-base leading-relaxed">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
