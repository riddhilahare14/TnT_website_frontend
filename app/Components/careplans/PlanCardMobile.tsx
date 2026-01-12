interface PlanCardMobileProps {
  plan: {
    id: string;
    title: string;
    subtitle: string;
    features: string[];
  };
}

export default function PlanCardMobile({ plan }: PlanCardMobileProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg max-w-md mx-auto transition-all duration-300 border-2 border-gray-100 has-[button:hover]:border-[#2F5F88] has-[button:active]:border-[#2F5F88] font-sans">
      
      {/* Header */}
      <div className="mb-5">
        {/* CHANGE: Changed font-bold to font-semibold */}
        <h3 className="text-[16px] font-semibold text-[#1F2933] mb-2">
          {plan.title}
        </h3>
        <p className="text-[14px] text-[#6B7280]">
          {plan.subtitle}
        </p>
      </div>

      {/* Features List */}
      <ul className="space-y-2.5 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-[#2F5F88] mt-0.5 text-[14px]">•</span>
            <span className="text-[14px] text-[#1F2933]">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Subscribe Button */}
      <button className="w-full py-3 px-6 rounded-lg font-medium text-[14px] transition-all bg-transparent border-2 border-[#2F5F88] text-[#2F5F88] hover:bg-[#2F5F88] hover:text-white active:bg-[#2F5F88] active:text-white">
        Subscribe via App
      </button>
    </div>
  );
}