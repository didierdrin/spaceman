import { useState, useEffect } from "react";
import { beatsService, Beat } from "../services/beats";

const CarouselSection = () => {
  const [beats, setBeats] = useState<Beat[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch beats with the genre "Carousel"
    beatsService
      .getBeatsByGenre("Carousel")
      .then((fetchedBeats) => {
        console.log("Fetched beats with genre Carousel:", fetchedBeats); // Debug log
        setBeats(fetchedBeats);
      })
      .catch((error) => {
        console.error("Error fetching beats:", error);
      });
  }, []);

  useEffect(() => {
    if (beats.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % beats.length);
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [beats]);

  return (
    <section className="h-[400px] bg-gradient-to-r from-orange-50 to-white relative">
      <div className="max-w-7xl mx-auto h-full px-4 py-12 flex items-center justify-center">
        {beats.length > 0 ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-full h-[700px]">
              <img
                src={beats[currentIndex].imageUrl || "/placeholder-image.jpg"}
                alt={beats[currentIndex].title}
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
              <div className="absolute bottom-8 left-8 bg-white bg-opacity-75 p-4 rounded-md shadow-md">
                <h3 className="font-semibold text-2xl mb-2">
                  {beats[currentIndex].title}
                </h3>
                <p className="text-gray-600 mb-1">
                  {beats[currentIndex].producerName}
                </p>
                <p className="text-orange-600 font-bold text-lg">
                  ${beats[currentIndex].price}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-600">No beats available for the carousel.</p>
        )}
      </div>
    </section>
  );
};

export default CarouselSection;




            // {/* <div className="relative w-full h-[700px]">
            //   <img
            //     src={beats[currentIndex].imageUrl || '/placeholder-image.jpg'}
            //     alt={beats[currentIndex].title}
            //     className="w-full h-full object-cover rounded-lg"
            //   />
            //   <div className="absolute bottom-8 left-8 bg-white bg-opacity-75 p-4 rounded-md shadow-md">
            //     <h3 className="font-semibold text-2xl mb-2">{beats[currentIndex].title}</h3>
            //     <p className="text-gray-600 mb-1">{beats[currentIndex].producerName}</p>
            //     <p className="text-orange-600 font-bold text-lg">${beats[currentIndex].price}</p>
            //   </div>
            // </div> */}




// import { useState, useEffect } from 'react';
// import { beatsService, Beat } from '../services/beats';

// const CarouselSection = () => {
//   const [beats, setBeats] = useState<Beat[]>([]);

//   useEffect(() => {
//     // Fetch beats with the genre "Carousel"
//     beatsService.getBeatsByGenre('Carousel')
//       .then((fetchedBeats) => {
//         console.log('Fetched beats with genre Carousel:', fetchedBeats); // Debug log
//         setBeats(fetchedBeats);
//       })
//       .catch((error) => {
//         console.error('Error fetching beats:', error);
//       });
//   }, []);

//   return (
//     <section className="h-[700px] bg-gradient-to-r from-orange-50 to-white pt-16">
//       <div className="max-w-7xl mx-auto h-full px-4 py-12">
//         <h2 className="text-3xl font-bold mb-8">Featured Carousel</h2>

//         <div className="flex gap-4 flex-wrap mb-8">
//           {beats.length > 0 ? (
//             beats.map((beat) => (
//               <div key={beat.id} className="bg-white rounded-lg shadow-md p-4">
//                 {beat.imageUrl && (
//                   <img
//                     src={beat.imageUrl}
//                     alt={beat.title}
//                     className="w-full h-48 object-cover rounded-lg mb-4"
//                   />
//                 )}
//                 <h3 className="font-semibold text-lg">{beat.title}</h3>
//                 <p className="text-gray-600 mb-2">{beat.producerName}</p>
//                 <p className="text-orange-600 font-semibold">${beat.price}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-600">No beats available for the carousel.</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CarouselSection;
