export default function CarePlansHero() {
  return (
    // CHANGE: Reduced top padding (pt-6, lg:pt-12) and bottom padding (pb-2, lg:pb-4)
    <section className="bg-gradient-to-b from-[#E8F0F6] to-white pt-6 pb-2 lg:pt-12 lg:pb-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* CHANGE: Reduced bottom margin (mb-2, lg:mb-4) to decrease space in the middle */}
        <h1 className="text-[32px] md:text-5xl lg:text-[56px] font-serif text-[#1E3A5F] leading-tight mb-2 lg:mb-4">
          Care Plans
        </h1>
        
        {/* CHANGE: 
            1. Font size -> text-[15px] (mobile) / text-[18px] (desktop)
            2. Color -> #374151 (Darker Grey)
        */}
        <p className="text-[15px] md:text-[18px] font-sans text-[#374151] max-w-2xl mx-auto leading-relaxed">
          Choose a plan that fits your lifestyle. We take responsibility for the rest, managing everything seamlessly.
        </p>
      </div>
    </section>
  );
}