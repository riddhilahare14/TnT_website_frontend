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
    // CHANGE: Added 'border border-[#2F5F88]' here too
    <div className="bg-white rounded-3xl p-6 shadow-lg max-w-md mx-auto border border-[#2F5F88]">
      
      {/* Header */}
      <div className="mb-5">
        <h3 className="text-xl font-bold text-[#1F2933] mb-2">
          {plan.title}
        </h3>
        <p className="text-sm text-[#6B7280]">
          {plan.subtitle}
        </p>
      </div>

      {/* Features List */}
      <ul className="space-y-2.5 mb-6">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-[#2F5F88] mt-0.5 text-sm">•</span>
            <span className="text-sm text-[#1F2933]">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Subscribe Button - Same uniform style as desktop */}
      <button className="w-full py-3 px-6 rounded-lg font-medium text-sm transition-all bg-transparent border-2 border-[#2F5F88] text-[#2F5F88] hover:bg-[#2F5F88] hover:text-white">
        Subscribe via App
      </button>
    </div>
  );
}