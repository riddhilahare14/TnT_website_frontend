'use client';

import { useEffect } from 'react';

interface ImageCreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const imageCredits = [
  'Young women\'s posing with pet - Image by Freepik',
  'Puppy and kitten - Image by Freepik',
  'Adult dog and cat - Image by Freepik',
  'Senior dog and cat - Image by Freepik'
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
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
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

        {/* Modal Content */}
        <div className="p-8">
          {/* Header Section */}
          <div className="mb-4">
            {/* CHANGE: Added 'text-center' and fixed 'font-semibold' */}
            <h2 className="text-2xl text-[#1E3A5F] mb-3 text-center">
              Image Credits
            </h2>
            {/* Divider Line */}
            <div className="w-full border-b border-gray-200"></div>
          </div>
          
          {/* List */}
          <ul className="space-y-2">
            {imageCredits.map((credit, index) => (
              <li 
                key={index}
                className="text-sm text-[#6B7280] leading-relaxed text-left" // Optional: Added text-center here too if you want the list items centered
              >
                {credit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}