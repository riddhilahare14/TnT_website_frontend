'use client';

import Link from 'next/link'; // Import Link for navigation

interface PlanCardProps {
  plan: {
    id: string;
    title: string;
    subtitle: string;
    features: string[];
  };
}

export default function PlanCard({ plan }: PlanCardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-md transition-all duration-300 border-2 border-gray-100 has-[button:hover]:border-[#2F5F88] has-[button:active]:border-[#2F5F88] font-sans h-full flex flex-col justify-between">
      
      <div>
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-[#1F2933] mb-2">
            {plan.title}
          </h3>
          <p className="text-sm text-[#6B7280]">
            {plan.subtitle}
          </p>
        </div>

        {/* Features List */}
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-[#2F5F88] mt-1 text-sm">•</span>
              <span className="text-sm text-[#1F2933]">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Subscribe Button wrapped in Link */}
      <Link href="/get-app">
        <button className="w-full py-3 px-6 rounded-lg font-medium text-sm transition-all bg-transparent border-2 border-[#2F5F88] text-[#2F5F88] hover:bg-[#2F5F88] hover:text-white active:bg-[#2F5F88] active:text-white">
          Subscribe via App
        </button>
      </Link>
    </div>
  );
}