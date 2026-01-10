export default function ServicesHero() {
  return (
    // CHANGE: Changed 'py-16 lg:py-4' to 'pt-16 pb-0 lg:pt-4 lg:pb-0'
    // This keeps top padding but removes ALL bottom padding
    <section className="bg-gradient-to-b from-[#E8F0F6] to-white pt-16 pb-0 lg:pt-4 lg:pb-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-serif text-[#1E3A5F] leading-tight mb-6 lg:mb-8">
          Our Services
        </h1>
        
        {/* Subtitle */}
        <p className="text-[18px] font-normal font-sans text-[#6B7280] max-w-xl mx-auto">
          Comprehensive care designed around your pets life, delivered with trust and expertise
        </p>
      </div>
    </section>
  );
}