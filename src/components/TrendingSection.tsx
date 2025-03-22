import { useState, useEffect } from 'react';
import { ShoppingCart, PlayCircle } from 'lucide-react';
import { beatsService, Beat } from '../services/beats';

const TrendingSection = ({ onPlayBeat }: { onPlayBeat: (beat: Beat) => void }) => {
  const [trendingBeats, setTrendingBeats] = useState<Beat[]>([]);

  useEffect(() => {
    beatsService.getTrendingBeats(5)
      .then(setTrendingBeats)
      .catch(console.error);
  }, []);

  return (
    <section className="h-[500px] bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Trending</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {trendingBeats.map((beat) => (
            <div key={beat.id} className="flex-none w-64">
              <div className="h-[320px] bg-white rounded-lg shadow-md">
                <div className="h-[150px] bg-orange-100 rounded-t-lg">
                  {beat.imageUrl && (
                    <img 
                      src={beat.imageUrl} 
                      alt={beat.title} 
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{beat.title}</h3>
                  <p className="text-gray-600 mb-4">{beat.producerName}</p>
                  <div className="flex justify-between items-center">
                    <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700">
                      <ShoppingCart className="h-4 w-4" />
                      ${beat.price}
                    </button>
                    <button 
                      onClick={() => onPlayBeat(beat)}
                      className="p-2 text-orange-600 hover:text-orange-700"
                    >
                      <PlayCircle className="h-8 w-8" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;