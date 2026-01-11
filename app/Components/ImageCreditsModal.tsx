'use client';

import { useEffect } from 'react';

interface ImageCreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const creditsData = [
  {
    category: 'Landing Page',
    items: [
      {
        label: "Young women’s posing with pet",
        text: "Image by prostooleh on Freepik",
        url: "https://www.freepik.com/free-photo/fashion-young-women-posing_7121854.htm"
      },
      {
        label: "Puppy and kitten",
        text: "Image by freepik",
        url: "https://www.freepik.com/free-ai-image/adorable-portrait-pets-surrounded-by-flowers_358126863.htm"
      },
      {
        label: "Adult dog and cat",
        text: "Image by freepik",
        url: "https://www.freepik.com/free-ai-image/view-cats-dogs-being-friends_317078950.htm"
      },
      {
        label: "Senior dog and cat",
        text: "Image by freepik",
        url: "https://www.freepik.com/free-ai-image/view-cats-dogs-being-friends_317078864.htm"
      }
    ]
  },
  {
    category: 'Services Page',
    items: [
      {
        label: "Doorstep Grooming",
        text: "Image by freepik",
        url: "https://www.freepik.com/free-photo/washing-pet-dog-home_30994428.htm"
      },
      {
        label: "Health & Wellness",
        text: "Image by freepik",
        url: "https://www.freepik.com/free-photo/veterinarian-taking-care-pet_20823240.htm"
      },
      {
        label: "Training & Behaviour",
        text: "Image by gpointstudio on Freepik",
        url: "https://www.freepik.com/free-photo/therapy-dog-giving-woman-paw_15749963.htm"
      },
      {
        label: "Boarding & Daycare",
        text: "Image by wirestock on Freepik",
        url: "https://www.freepik.com/free-photo/closeup-shot-cute-dog-laying-with-cat-isolated-white_17244759.htm"
      },
      {
        label: "Community & Experiences",
        text: "Image by freepik",
        url: "https://www.freepik.com/free-photo/medium-shot-people-learning_23404623.htm"
      }
    ]
  },
  {
    category: 'About Us Page',
    items: [
      {
        label: "About us",
        text: "Image by tonodiaz on Freepik",
        url: "https://www.freepik.com/free-photo/beautiful-sad-woman-saying-goodbye-her-old-german-shepherd-professional-male-veterinarian-preparing-ready-put-down-sick-dog_27999785.htm"
      }
    ]
  }
];

export default function ImageCreditsModal({ isOpen, onClose }: ImageCreditsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full relative max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="p-8 pb-0">
          <h2 className="text-2xl text-[#1E3A5F] mb-3 text-center font-semibold">
            Image Credits
          </h2>
          <div className="w-full border-b border-gray-200"></div>
        </div>

        {/* Modal Content (Scrollable) */}
        <div className="p-8 overflow-y-auto font-sans">
          <div className="space-y-6">
            {creditsData.map((section, idx) => (
              <div key={idx}>
                {/* Section Title */}
                <h3 className="text-[#1E3A5F] font-semibold text-lg mb-3">
                  {section.category}
                </h3>
                
                {/* Links List */}
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    // CHANGE: Removed 'block' from span and layout is now inline
                    <li key={itemIdx} className="text-sm text-[#6B7280]">
                      <span className="font-medium text-gray-800">{item.label}</span>
                      <span className="mx-1">-</span>
                      <a 
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2F5F88] hover:underline hover:text-[#1E3A5F] transition-colors"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}