import PlanCard from './PlanCard';

type PlanCardsProps = {
  selectedPet: 'dogs' | 'cats';
};

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
      'All basic care benefits included',
      'Priority booking for services',
      'Quarterly wellness checks',
      'Nutritional planning support',
      'Pet taxi discounts',
    ],
  },
  {
    id: 'eternal',
    title: 'Eternal Care',
    subtitle: 'Premium, full responsibility coverage',
    features: [
      'All Plus Care benefits included',
      '24/7 vet consultation access',
      'Monthly grooming sessions',
      'Comprehensive insurance handling',
      'Dedicated care manager',
    ],
  },
];

export default function PlanCards({ selectedPet }: PlanCardsProps) {
  return (
    // CHANGE: Reduced 'pt' (padding-top) to 'pt-2' for mobile and 'lg:pt-6' for desktop.
    // This reduces the space directly above the first card (between toggle and cards).
    <section className="bg-white pt-4 pb-12 lg:pt-8 lg:pb-20">
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