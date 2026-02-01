import React from 'react';

const philosophyItems = [
  {
    id: 1,
    text: 'Your pet meets\nfamiliar groomers',
    icon: '/icons/aboutus/5.svg',
  },
  {
    id: 2,
    text: 'Gentle handling,\nnever rushed',
    icon: '/icons/aboutus/6.svg',
  },
  {
    id: 3,
    text: 'Health care guided\nby vets',
    icon: '/icons/aboutus/7.svg',
  },
  {
    id: 4,
    text: 'Regular training,\nalways improving',
    icon: '/icons/aboutus/8.svg',
  },
];

export default function TeamPhilosophy() {
  return (
    // CHANGE: Adjusted pt-2 to pt-6 and md:py-8 to md:pt-12 to add space above the heading
    <section className="bg-white pt-6 pb-2 md:pt-12 md:pb-8 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[24px] md:text-[40px] font-serif text-[#1E3A5F] leading-tight mb-2 md:mb-4">
          Team Philosophy
        </h2>

        {/* --- MOBILE VIEW (Split-Color Curves) --- */}
        <div className="relative md:hidden w-full mx-auto" style={{ minHeight: '520px', maxWidth: '320px' }}>
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 200 520"
            preserveAspectRatio="none"
          >
            {/* CURVE 1: Icon 1 to Icon 2 */}
            <path 
              d="M 100,60 Q 40,85 45,115" 
              stroke="#E2B15B" strokeWidth="1.5" strokeDasharray="6,6" fill="none" 
            />
            <path 
              d="M 45,115 Q 50,145 100,170" 
              stroke="#1E3A5F" strokeWidth="1.5" strokeDasharray="6,6" fill="none" 
            />

            {/* CURVE 2: Icon 2 to Icon 3 */}
            <path 
              d="M 100,170 Q 160,195 155,235" 
              stroke="#E2B15B" strokeWidth="1.5" strokeDasharray="6,6" fill="none" 
            />
            <path 
              d="M 155,235 Q 150,275 100,300" 
              stroke="#1E3A5F" strokeWidth="1.5" strokeDasharray="6,6" fill="none" 
            />

            {/* CURVE 3: Icon 3 to Icon 4 */}
            <path 
              d="M 100,300 Q 40,325 45,365" 
              stroke="#E2B15B" strokeWidth="1.5" strokeDasharray="6,6" fill="none" 
            />
            <path 
              d="M 45,365 Q 50,405 100,430" 
              stroke="#1E3A5F" strokeWidth="1.5" strokeDasharray="6,6" fill="none" 
            />
          </svg>

          {philosophyItems.map((item, idx) => (
            <div 
              key={item.id} 
              className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center w-[220px] z-10" 
              style={{ top: `${idx * 130 + 20}px` }}
            >
              <div className="bg-white p-2 border-gray-100   mb-2">
                <img src={item.icon} alt="" className="w-10 h-10 object-contain" />
              </div>
              <p className="text-[#1F2933] text-[14px] font-sans font-normal leading-tight text-center whitespace-pre-line bg-white px-2 py-0.5">
                {item.text}
              </p>
            </div>
          ))}
        </div>

{/* --- DESKTOP VIEW (Updated with 3 distinct curves) --- */}
        <div className="hidden md:block relative w-full max-w-6xl mx-auto h-[280px]">
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            viewBox="0 0 1000 280" 
            fill="none"
          >
            <defs>
              {/* Gradient for upward curves (Gold to Navy) */}
              <linearGradient id="gradUpward" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E2B15B" />
                <stop offset="50%" stopColor="#E2B15B" />
                <stop offset="50%" stopColor="#1E3A5F" />
                <stop offset="100%" stopColor="#1E3A5F" />
              </linearGradient>
              
              {/* Gradient for downward curve (Navy to Gold) */}
              <linearGradient id="gradDownward" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1E3A5F" />
                <stop offset="50%" stopColor="#1E3A5F" />
                <stop offset="50%" stopColor="#E2B15B" />
                <stop offset="100%" stopColor="#E2B15B" />
              </linearGradient>
            </defs>
            
            {/* Curve 1: Icon 1 to Icon 2 (Upward Arch - starts from above icon) */}
            <path 
              d="M 120,60 Q 255,-30 380,60" 
              stroke="url(#gradUpward)" 
              strokeWidth="2.5" 
              strokeDasharray="6,6" 
            />
            {/* Curve 2: Icon 2 to Icon 3 (Downward Arch - starts from below text) */}
            <path 
              d="M 380,180 Q 500,280 620,180" 
              stroke="url(#gradDownward)" 
              strokeWidth="2.5" 
              strokeDasharray="6,6" 
            />
            {/* Curve 3: Icon 3 to Icon 4 (Upward Arch - starts from above icon) */}
            <path 
              d="M 620,60 Q 735,-30 880,60" 
              stroke="url(#gradUpward)" 
              strokeWidth="2.5" 
              strokeDasharray="6,6" 
            />
          </svg>
          <div className="relative w-full h-full">
            {philosophyItems.map((item, idx) => {
              // Adjusted to center the content properly
              const leftPos = [15, 40, 60, 85][idx];
              
              return (
                <div 
                  key={item.id} 
                  className="absolute transform -translate-x-1/2 flex flex-col items-center w-[200px] z-20" 
                  style={{ 
                    left: `${leftPos}%`, 
                    top: '100px', 
                    marginTop: '-40px'
                  }}
                >
                  <div className="mb-4 bg-white p-2  border-gray-50 ">
                    <img src={item.icon} alt="" className="w-10 h-10 object-contain" />
                  </div>
                  <p className="text-[#1F2933] text-[16px] font-sans font-normal leading-snug whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}