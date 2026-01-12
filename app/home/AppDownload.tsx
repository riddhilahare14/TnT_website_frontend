import Image from 'next/image';

export default function AppDownload() {
  return (
    // CHANGE: Changed padding to 'pt-6 pb-2' (Top: 6, Bottom: 2) 
    // This adds space above the title but keeps the bottom tight.
    <section className="pt-6 pb-2 lg:py-4 bg-[#2F5F88]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* DESKTOP IMAGE: Hidden on mobile, visible on desktop */}
          <div className="hidden lg:flex justify-center lg:justify-start lg:pl-24">
            <Image
              src="/images/app-phone.svg"
              alt="Tails and Tales App"
              width={401}
              height={564}
              className="max-w-xs lg:max-w-full"
            />
          </div>

          {/* CONTENT COLUMN */}
          <div className="text-white space-y-2 lg:space-y-6">
            
            {/* 1. HEADER TEXT */}
            <div className="text-center lg:text-left">
              <h2 className="text-[24px] lg:text-[36px] leading-tight font-serif">
                Everything you need, in one app
              </h2>
              <p className="text-[14px] lg:text-lg text-[#E8F0F6] mt-2 font-sans">
                Book services, manage subscriptions, track your pet&apos;s health journey, and connect with our community.
              </p>
            </div>
            
            {/* 2. MOBILE LAYOUT: Phone (Left) + Buttons (Right) */}
            <div className="lg:hidden flex items-center justify-center gap-6 mt-0">
              
              {/* Left Side: Phone Image */}
              <div className="w-1/2 flex justify-end">
                <Image 
                  src="/images/app-phone.png" 
                  alt="App Mobile" 
                  width={400} 
                  height={600}
                  className="w-full max-w-[240px] h-auto object-contain transform -rotate-6"
                />
              </div>

              {/* Right Side: Vertical Buttons */}
              <div className="w-1/2 flex flex-col gap-4 pr-4">
                
                {/* Google Play (Dark) - Top */}
                <button className="flex items-center justify-center gap-2 bg-[#1F2933] w-[145px] h-[46px] rounded-lg hover:bg-[#2F3D4D] transition-colors shadow-lg">
                  <Image 
                    src="/icons/play-store.svg" 
                    alt="Google Play" 
                    width={20} 
                    height={20}
                  />
                  <span className="text-[14px] font-medium text-white font-sans">Google Play</span>
                </button>

                {/* App Store (White) - Bottom */}
                <button className="flex items-center justify-center gap-2 bg-white w-[145px] h-[46px] rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                  <Image 
                    src="/icons/app-store.svg" 
                    alt="Apple" 
                    width={20} 
                    height={20}
                  />
                  <span className="text-[14px] font-medium text-[#1F2933] font-sans">App Store</span>
                </button>
              </div>
            </div>

            {/* 3. DESKTOP BUTTONS: Visible ONLY on desktop */}
            <div className="hidden lg:flex flex-wrap gap-4 pt-4">
              <button className="flex items-center justify-center gap-2 bg-white w-[145px] h-[40px] rounded-lg hover:bg-gray-100 transition-colors">
                <Image 
                  src="/icons/app-store.svg" 
                  alt="Apple" 
                  width={20} 
                  height={20}
                />
                <span className="text-sm font-medium text-[#1F2933] font-sans">App Store</span>
              </button>

              <button className="flex items-center justify-center gap-2 bg-[#1F2933] w-[145px] h-[40px] rounded-lg hover:bg-[#2F3D4D] transition-colors">
                <Image 
                  src="/icons/play-store.svg" 
                  alt="Google Play" 
                  width={20} 
                  height={20}
                />
                <span className="text-sm font-medium text-white font-sans">Google Play</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}