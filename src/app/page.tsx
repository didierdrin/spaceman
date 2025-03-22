'use client';
import { useState } from 'react';
import { ShoppingCart, Search, Play, PlayCircle } from 'lucide-react';
import { Beat } from '../services/beats';
import PlayBar  from "@/components/Playbar";
import TopBar  from "@/components/Topbar";
import Footer  from "@/components/Footer";
import CarouselSection from '@/components/CarouselSection';
import TrendingSection from '@/components/TrendingSection';



const ProducersSection = () => (
  <section className="h-[500px] bg-orange-50">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-2">Spaceman Studio</h2>
      <p className="text-xl text-gray-600 mb-8">For producers - Your music business</p>
      <div className="grid grid-cols-3 gap-8 mb-8">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Manage your business</h3>
          <p className="text-gray-600">Upload, price, and organize your beats with ease</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Track your performance</h3>
          <p className="text-gray-600">Get insights into your sales and audience engagement</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="font-semibold text-lg mb-4">Grow your audience</h3>
          <p className="text-gray-600">Connect with artists and expand your reach</p>
        </div>
      </div>
      <button className="px-8 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700">
        Get Started
      </button>
    </div>
  </section>
);

export default function Home() {
  const [currentBeat, setCurrentBeat] = useState<Beat | undefined>();

  const handlePlayBeat = (beat: Beat) => {
    setCurrentBeat(beat);
  };

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <CarouselSection />
      <br /><br /><br /><br /><br />
      <TrendingSection onPlayBeat={handlePlayBeat} />
      <ProducersSection />
      <Footer />
      <PlayBar currentBeat={currentBeat} />
    </div>
  );
}
