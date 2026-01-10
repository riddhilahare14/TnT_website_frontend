import Image from 'next/image';

export default function AppDownload() {
  return (
    <section className="bg-gradient-to-b from-[#E8F0F6] to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* DESKTOP IMAGE (Hidden on Mobile) */}
          <div className="hidden lg:flex justify-center lg:justify-start lg:pl-24">
            <Image
              src="/images/app-phone.png"
              alt="Tails and Tales App"
              width={401}
              height={564}
              className="max-w-xs lg:max-w-full drop-shadow-xl"
            />
          </div>

          {/* CONTENT SECTION */}
          <div className="space-y-8">
            
            {/* Header Text (Visible on all screens) */}
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-[36px] lg:text-5xl leading-tight font-serif text-[#1E3A5F] ">
                Everything you need, in one app
              </h2>
              <p className="text-lg text-[#4B5563]">
                Book services, manage subscriptions, track your pets health journey, and connect with our community.
              </p>
            </div>

            {/* --- MOBILE LAYOUT (Phone Left | Buttons Right) --- */}
            {/* CHANGE 1: Reduced gap from gap-6 to gap-2 to pull them closer */}
            <div className="lg:hidden flex items-center justify-center gap-8 mt-8">
              
              {/* Left: Phone Image */}
              {/* CHANGE 2: Increased width from 40% to 50% and max-width from 160px to 220px */}
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
                <p className="text-[#1F2933] text-sm leading-tight mb-1">
                  Download the app <br /> to get started
                </p>
                
                {/* Google Play (Dark) */}
                <button className="flex items-center justify-center gap-2 bg-[#1F2933] w-[140px] h-[44px] rounded-lg shadow-md">
                  <Image 
                    src="/icons/google-play.png" 
                    alt="Google Play" 
                    width={16} 
                    height={16}
                  />
                  <span className="text-xs font-medium text-white">Google Play</span>
                </button>

                {/* App Store (White) */}
                <button className="flex items-center justify-center gap-2 bg-white w-[140px] h-[44px] rounded-lg border border-gray-200 shadow-sm">
                  <Image 
                    src="/icons/apple.png" 
                    alt="Apple" 
                    width={16} 
                    height={16}
                  />
                  <span className="text-xs font-medium text-[#1F2933]">App Store</span>
                </button>
              </div>
            </div>

            {/* --- DESKTOP BUTTONS (Hidden on Mobile) --- */}
            <div className="hidden lg:block">
              <p className="text-[#1F2933] mb-4">
                Download the app to get started
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center justify-center gap-2 bg-white w-[166px] h-[54px] rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm">
                  <Image 
                    src="/icons/apple.png" 
                    alt="Apple" 
                    width={20} 
                    height={20}
                  />
                  <span className="text-sm font-medium text-[#1F2933]">App Store</span>
                </button>

                <button className="flex items-center justify-center gap-2 bg-[#1F2933] w-[166px] h-[54px] rounded-lg hover:bg-[#2F3D4D] transition-colors shadow-md">
                  <Image 
                    src="/icons/google-play.png" 
                    alt="Google Play" 
                    width={20} 
                    height={20}
                  />
                  <span className="text-sm font-medium text-white">Google Play</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}