export default function ServicesHero() {
  return (
    // CHANGE: Reduced top padding to 'pt-8' and added small bottom padding 'pb-4' for mobile
    <section className="bg-gradient-to-b from-[#E8F0F6] to-white pt-8 pb-4 lg:pt-4 lg:pb-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Heading */}
        {/* CHANGE: Set mobile text to 'text-[32px]' and reduced bottom margin to 'mb-3' */}
        <h1 className="text-[32px] md:text-5xl lg:text-[56px] font-serif text-[#1E3A5F] leading-tight mb-3 lg:mb-8">
          Our Services
        </h1>
        
        {/* Subtitle */}
        {/* CHANGE: Set mobile text to 'text-[14px]' */}
        <p className="text-[14px] lg:text-[18px] font-normal font-sans text-[#6B7280] max-w-xl mx-auto lg:mb-8">
          Comprehensive care designed around your pets life, delivered with trust and expertise
        </p>
      </div>
    </section>
  );
}