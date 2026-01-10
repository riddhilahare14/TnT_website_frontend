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
          
          {/* OUTER CONTAINER: Fixed dimensions 270px x 54px */}
          <div className="inline-flex bg-[#E8F0F6] border border-[#2F5F88] rounded-lg p-1 w-[270px] h-[54px]">
            
            {/* DOGS BUTTON */}
            {/* Added 'flex-1' to fill half the width, and 'h-full' to fill height */}
            {/* Increased font size to 'text-lg' */}
            <button
              onClick={() => onToggle('dogs')}
              className={`flex-1 h-full rounded-md text-lg font-medium transition-all duration-200 flex items-center justify-center ${
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
              className={`flex-1 h-full rounded-md text-lg font-medium transition-all duration-200 flex items-center justify-center ${
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