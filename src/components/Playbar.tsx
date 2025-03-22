import { useState, useRef, useEffect } from 'react';
import { Play, Pause, ShoppingCart } from 'lucide-react';
import { Beat } from '../services/beats';

interface PlayBarProps {
  currentBeat?: Beat;
}

const PlayBar = ({ currentBeat }: PlayBarProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (currentBeat) {
      if (audioRef.current) {
        audioRef.current.src = currentBeat.previewUrl;
        if (isPlaying) {
          audioRef.current.play();
        }
      }
    }
  }, [currentBeat]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (!currentBeat) return null;

  return (
    <>
      <audio
        ref={audioRef}
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}
        onEnded={() => setIsPlaying(false)}
      />
      <div className="fixed bottom-0 w-full h-[70px] bg-white border-t shadow-lg z-50">
        <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={togglePlay}
              className="p-2 text-orange-600 hover:text-orange-700"
            >
              {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
            </button>
            <div>
              <h3 className="font-semibold">{currentBeat.title}</h3>
              <p className="text-gray-600">{currentBeat.producerName}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">
              {formatTime(currentTime)} / {formatTime(currentBeat.duration)}
            </span>
            <button className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700">
              Buy Now ${currentBeat.price}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayBar;

// // Playbar component
// import { Play } from 'lucide-react';

// const PlayBar = () => (
//     <div className="fixed bottom-0 w-full h-[70px] bg-white border-t shadow-lg z-50">
//       <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <button className="p-2 text-orange-600 hover:text-orange-700">
//             <Play className="h-8 w-8" />
//           </button>
//           <div>
//             <h3 className="font-semibold">Currently Playing Beat</h3>
//             <p className="text-gray-600">Producer Name</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-4">
//           <span className="text-gray-600">0:00 / 2:30</span>
//           <button className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700">
//             Buy Now $29.99
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   export default PlayBar;