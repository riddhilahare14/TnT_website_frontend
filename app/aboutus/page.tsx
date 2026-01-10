import Hero from '../Components/aboutus/Hero';
import HowWeThink from '../Components/aboutus/HowWeThink';
import TeamPhilosophy from '../Components/aboutus/TeamPhilosophy';
import MissionStatement from '../Components/aboutus/MissionStatement';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowWeThink />
      <TeamPhilosophy />
      <MissionStatement />
    </main>
  );
}