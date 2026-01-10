'use client'; // 👈 Add this at the top

import { useState } from 'react';
import CarePlansHero from '../Components/careplans/CarePlansHero';
import PlanToggle from '../Components/careplans/PlanToggle';
import PlanCards from '../Components/careplans/PlanCards';
import AppDownload from '../home/AppDownload'; 

export default function CarePlansPage() {
  // 1. Create the state here (The Brain)
  const [selectedPet, setSelectedPet] = useState<'dogs' | 'cats'>('dogs');

  return (
    <main className="min-h-screen bg-[#E8F0F6]">
      <CarePlansHero />
      
      {/* 2. Pass the state and the changer function to the Toggle */}
      <PlanToggle 
        selectedPet={selectedPet} 
        onToggle={setSelectedPet} 
      />
      
      {/* 3. Pass the state to the Cards so they know what to show */}
      <PlanCards selectedPet={selectedPet} />
      
      <AppDownload />
    </main>
  );
}