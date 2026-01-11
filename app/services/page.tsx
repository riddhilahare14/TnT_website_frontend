import ServicesHero from '../Components/services/ServicesHero';
import ServiceCard from '../Components/services/ServiceCard';
import AppDownload from '../home/AppDownload';

const servicesData = [
  {
    id: 'doorstep-grooming',
    title: 'Doorstep Grooming',
    // CHANGE: Updated to use PNG path instead of emoji
    icon: '/icons/services/1.svg', 
    subtitle: 'Care that comes home - calm, clean, and completely personal',
    image: '/images/services/grooming.png',
    features: [
      'Custom-fitted vans equipped with modern tools',
      'Stress-free, one on one attention',
      'No cages, no drying boxes, just care'
    ],
    description: 'Because your pet deserves continuity and calm, bookings live in our app',
    imagePosition: 'left'
  },
  {
    id: 'health-wellness',
    title: 'Health & Wellness',
    // CHANGE: Updated to use PNG path
    icon: '/icons/services/2.svg', 
    subtitle: 'Proactive care for a healthier, happier pet',
    image: '/images/services/health.png',
    features: [
      'Regular preventive health screenings',
      'Vaccination tracking and reminders',
      'Nutrition planning based on life stage'
    ],
    description: 'Manage everything easily through our app',
    imagePosition: 'right'
  },
  {
    id: 'training-behaviour',
    title: 'Training & Behaviour',
    // CHANGE: Updated to use PNG path
    icon: '/icons/services/3.svg',
    subtitle: 'Guiding behaviour with patience, trust, and kindness',
    image: '/images/services/training.png',
    features: [
      'Puppy & kitten socialisation classes',
      'Positive reinforcement techniques only',
      'Behavioral modification for anxiety'
    ],
    description: 'So your pet sees familiar care, every booking stays in our app',
    imagePosition: 'left'
  },
  {
    id: 'boarding-daycare',
    title: 'Boarding & Daycare',
    // CHANGE: Updated to use PNG path
    icon: '/icons/services/4.svg',
    subtitle: 'A second home where your pet feels comforted and never alone',
    image: '/images/services/boarding.png',
    features: [
      'Safe, supervised play environments',
      'Routine-based care to reduce stress',
      'Regular photo updates for peace of mind'
    ],
    description: 'Manage boarding and updates in one calm place',
    imagePosition: 'right'
  },
  {
    id: 'community-experiences',
    title: 'Community & Experiences',
    // CHANGE: Updated to use PNG path
    icon: '/icons/services/5.svg',
    subtitle: 'Experiences that bring tails and hearts together',
    image: '/images/services/community.png',
    features: [
      'Group walks and social meetups',
      'Educational workshops for pet parents',
      'Curated pet-friendly city trips'
    ],
    description: 'Join the community and make memories your furry friend will love',
    imagePosition: 'left'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* HERO SECTION WRAPPER
        bg-gradient-to-b: Creates a vertical gradient (Top to Bottom)
        from-[#E8F0F6]: Starts with your blue shade
        to-white: Ends in pure white
        
        This ensures the blue is only at the top and fades out before the services list starts.
      */}
      <div className="bg-gradient-to-b from-[#E8F0F6] to-white pb-8">
        <ServicesHero />
      </div>
      
      {/* Services List - Background is white from the <main> tag */}
      <section className="pt-4 pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      <AppDownload />
    </main>
  );
}