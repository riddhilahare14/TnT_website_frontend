import PlanCard from './PlanCard';

type PlanCardsProps = {
  selectedPet: 'dogs' | 'cats';
};

// 1. Unified Data (Same for everyone)
const plans = [
  {
    id: 'basic',
    title: 'Basic Care',
    subtitle: 'Responsible, consistent care essentials.',
    features: [
      'Routine health reminders',
      'Annual vaccination tracking',
      'Basic grooming support',
      'Digital health records',
    ],
  },
  {
    id: 'plus',
    title: 'Plus Care',
    subtitle: 'Designed for busy pet parents',
    features: [
      'All basic care benefits',
      'Priority booking',
      'Quarterly wellness checks',
      'Nutritional planning',
    ],
  },
  {
    id: 'eternal',
    title: 'Eternal Care',
    subtitle: 'Premium, full responsibility coverage',
    features: [
      'All Plus benefits',
      '24/7 vet consultation',
      'Monthly grooming',
      'Comprehensive insurance',
    ],
  },
];

export default function PlanCards({ selectedPet }: PlanCardsProps) {
  // selectedPet is ready for future logic (dogs/cats)
  console.log(selectedPet);

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
