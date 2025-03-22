import { collection, query, doc, where, orderBy, increment, updateDoc, limit, getDocs, onSnapshot } from 'firebase/firestore';
import { firestore as db } from '../../firebaseApp';

export interface Beat {
  id: string;
  title: string;
  producerId: string;
  producerName: string;
  audioUrl: string;
  previewUrl: string;
  duration: number;
  genre: string;
  tags: string[];
  bpm: number;
  price: number;
  licenseTypes: {
    [key: string]: {
      type: string;
      price: number;
      rights: string[];
    };
  };
  plays: number;
  purchases: number;
  likes: number;
  createdAt: any;
  updatedAt: any;
  imageUrl: string;
  isActive: boolean;
  isFeatured: boolean;
  searchKeywords: string[];
}

class BeatsService {
  async getTrendingBeats(limit = 5): Promise<Beat[]> {
    const q = query(
      collection(db, 'spaceman_beats'),
      where('isActive', '==', true),
      orderBy('plays', 'desc'),
      
    //   limit(limit)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Beat));
  }

  async getBeatsByGenre(genre: string, limit = 10): Promise<Beat[]> {
    const q = query(
      collection(db, 'spaceman_beats'),
      where('isActive', '==', true),
      where('genre', '==', genre),
      orderBy('createdAt', 'desc'),
    //   limit(limit)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Beat));
  }

 

  subscribeToBeats(callback: (beats: Beat[]) => void) {
    const q = query(
      collection(db, 'spaceman_beats'),
      where('isActive', '==', true),
      orderBy('createdAt', 'desc')
    );
    
    return onSnapshot(q, (snapshot) => {
      const beats = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Beat));
      callback(beats);
    });
  }

  async incrementPlays(beatId: string) {
    const beatRef = doc(db, 'spaceman_beats', beatId);
    await updateDoc(beatRef, {
      plays: increment(1)
    });
  }
}

export const beatsService = new BeatsService();