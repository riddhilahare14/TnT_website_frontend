'use client';

type PlanToggleProps = {
  selectedPet: 'dogs' | 'cats';
  onToggle: (pet: 'dogs' | 'cats') => void;
};

export default function PlanToggle({ selectedPet, onToggle }: PlanToggleProps) {
  return (
    <section className="bg-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          
          {/* OUTER CONTAINER: Responsive Dimensions */}
          {/* Mobile: 210px x 42px */}
          {/* Desktop (lg): 270px x 54px */}
          <div className="inline-flex bg-[#E8F0F6] border border-[#2F5F88] rounded-lg p-1 w-[210px] h-[42px] lg:w-[270px] lg:h-[54px] transition-all duration-300">
            
            {/* DOGS BUTTON */}
            {/* Mobile Text: 14px, Desktop Text: lg */}
            <button
              onClick={() => onToggle('dogs')}
              className={`flex-1 h-full rounded-md text-[14px] lg:text-lg font-medium transition-all duration-200 flex items-center justify-center ${
                selectedPet === 'dogs'
                  ? 'bg-[#2F5F88] text-white shadow-sm'
                  : 'text-[#2F5F88] hover:bg-white/50'
              }`}
            >
              Dogs
            </button>

            {/* CATS BUTTON */}
            <button
              onClick={() => onToggle('cats')}
              className={`flex-1 h-full rounded-md text-[14px] lg:text-lg font-medium transition-all duration-200 flex items-center justify-center ${
                selectedPet === 'cats'
                  ? 'bg-[#2F5F88] text-white shadow-sm'
                  : 'text-[#2F5F88] hover:bg-white/50'
              }`}
            >
              Cats
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
}