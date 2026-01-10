import Link from 'next/link'; // Import the Link component

export default function CarePlans() {
  return (
    <section className="py-16 lg:py-24 bg-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-serif text-white mb-8">
          Care Plans, built for every life stage.
        </h2>
        
        {/* CHANGE: Changed <button> to <Link> and added 'href' */}
        {/* Added 'inline-block' so it retains the button shape */}
        <Link 
          href="/careplans"
          className="inline-block px-8 py-3 border-2 border-[#EEB541] text-[#EEB541] rounded-lg hover:bg-[#EEB541] hover:text-[#1E3A5F] transition-colors font-medium"
        >
          View Care Plans
        </Link>
      </div>
    </section>
  );
}