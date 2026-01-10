export default function CarePlansHero() {
  return (
    <section className="bg-gradient-to-b from-[#E8F0F6] to-white pt-16 pb-6 lg:pt-24 lg:pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* CHANGE: Added 'mb-6 lg:mb-8' to increase gap below the heading */}
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-serif text-[#1E3A5F] leading-tight mb-6 lg:mb-8">
          Care Plans
        </h1>
        
        <p className="text-base lg:text-lg text-[#6B7280] max-w-2xl mx-auto">
          Choose a plan that fits your lifestyle. We take responsibility for the rest, managing everything seamlessly.
        </p>
      </div>
    </section>
  );
}