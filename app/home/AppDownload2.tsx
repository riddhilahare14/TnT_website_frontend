import Image from 'next/image';

export default function AppDownload() {
  return (
    // CHANGE: Reduced padding to 'py-2 lg:py-10' to minimize space above and below
    <section className="bg-gradient-to-b from-[#E8F0F6] to-white py-2 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* DESKTOP IMAGE (Hidden on Mobile) */}
          <div className="hidden lg:flex justify-center lg:justify-start lg:pl-24">
            <Image
              src="/images/app-phone.svg"
              alt="Tails and Tales App"
              width={401}
              height={564}
              className="max-w-xs lg:max-w-full drop-shadow-xl"
            />
          </div>

          {/* CONTENT SECTION */}
          <div className="space-y-4 lg:space-y-8">
            
            {/* Header Text */}
            <div className="space-y-2 lg:space-y-4 text-center lg:text-left">
              <h2 className="text-[24px] lg:text-5xl leading-tight font-serif lg:font-serif text-[#1E3A5F]">
                Everything you need, in one app
              </h2>
              
              {/* CHANGE: 
                  1. Updated color to #374151 (Darker Gray) 
                  2. Kept text-[14px] font-sans 
              */}
              <p className="text-[14px] lg:text-lg text-[#374151] font-sans">
                Book services, manage subscriptions, track your pets health journey, and connect with our community.
              </p>
            </div>

            {/* --- MOBILE LAYOUT (Phone Left | Buttons Right) --- */}
            <div className="lg:hidden flex items-center justify-center gap-4 mt-4">
              
              {/* Left: Phone Image */}
              <div className="flex-shrink-0 w-[50%] max-w-[440px]">
                <Image
                  src="/images/app-phone.png"
                  alt="App Mobile"
                  width={300}
                  height={420}
                  className="w-full h-auto drop-shadow-lg transform -rotate-6"
                />
              </div>

              {/* Right: Text + Vertical Buttons */}
              <div className="flex flex-col gap-3">
                <p className="text-[#1F2933] text-[14px] font-sans leading-tight mb-1">
                  Download the app <br /> to get started
                </p>
                
                {/* Google Play (Dark) */}
                <button className="flex items-center justify-center gap-2 bg-[#1F2933] w-[140px] h-[44px] rounded-lg shadow-md">
                  <Image 
                    src="/icons/play-store.svg" 
                    alt="Google Play" 
                    width={16} 
                    height={16}
                  />
                  <span className="text-[14px] font-medium font-sans text-white">Google Play</span>
                </button>

                {/* App Store (White) */}
                <button className="flex items-center justify-center gap-2 bg-white w-[140px] h-[44px] rounded-lg border border-gray-200 shadow-sm">
                  <Image 
                    src="/icons/app-store.svg" 
                    alt="Apple" 
                    width={16} 
                    height={16}
                  />
                  <span className="text-[14px] font-medium font-sans text-[#1F2933]">App Store</span>
                </button>
              </div>
            </div>

            {/* --- DESKTOP BUTTONS (Hidden on Mobile) --- */}
            <div className="hidden lg:block">
              <p className="text-[#1F2933] mb-4 font-sans text-lg">
                Download the app to get started
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center justify-center gap-2 bg-white w-[166px] h-[54px] rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm">
                  <Image 
                    src="/icons/app-store.svg" 
                    alt="Apple" 
                    width={20} 
                    height={20}
                  />
                  <span className="text-sm font-sans font-medium text-[#1F2933]">App Store</span>
                </button>

                <button className="flex items-center justify-center gap-2 bg-[#1F2933] w-[166px] h-[54px] rounded-lg hover:bg-[#2F3D4D] transition-colors shadow-md">
                  <Image 
                    src="/icons/play-store.svg" 
                    alt="Google Play" 
                    width={20} 
                    height={20}
                  />
                  <span className="text-sm font-sans font-medium text-white">Google Play</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}