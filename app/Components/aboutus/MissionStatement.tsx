export default function MissionStatement() {
  return (
    // CHANGE: Reduced padding from 'py-16 md:py-20 lg:py-24' to 'py-10 md:py-12 lg:py-14'
    <section className="bg-white py-8 md:py-8 lg:py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <blockquote className="mb-8 md:mb-10">
          {/* FIX: Used &quot; code for the quote marks to prevent errors */}
          <p className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-serif text-[#2F5F88] leading-relaxed">
            &quot;To redefine the relationship between humans and pets through trust, knowledge, and care.&quot;
          </p>
        </blockquote>
        
        <div className="flex flex-col items-center gap-5">
          <p className="text-[#6B7280] text-sm md:text-base font-sans font-medium">
            Experience this in the App
          </p>
          <a
            href="#"
            className="bg-[#2F5F88] hover:bg-[#1E3A5F] text-white px-8 py-3.5 rounded-lg font-sans font-medium transition-all duration-300 text-sm md:text-base shadow-md hover:shadow-lg"
          >
            Download the App
          </a>
        </div>
      </div>
    </section>
  );
}