import Link from 'next/link';

export default function CarePlans() {
  return (
    // CHANGE 1: Reduced top/bottom padding from 'py-16' to 'py-10' for mobile
    <section className="py-10 lg:py-24 bg-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* CHANGE 2: Set mobile text size to 'text-[32px]' */}
        <h2 className="text-[32px] lg:text-4xl font-serif text-white mb-8">
          Care Plans, built for every life stage.
        </h2>
        
        <Link 
          href="/careplans"
          // CHANGE 3: Added 'font-sans' and 'text-[14px]' for mobile text sizing
          className="inline-block px-8 py-3 border-2 border-[#EEB541] text-[#EEB541] rounded-lg hover:bg-[#EEB541] hover:text-[#1E3A5F] transition-colors font-medium font-sans text-[14px] lg:text-base"
        >
          View Care Plans
        </Link>
      </div>
    </section>
  );
}