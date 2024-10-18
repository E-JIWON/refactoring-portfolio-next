import {
   collection,
   getDocs,
   writeBatch,
   query,
   limit,
} from 'firebase/firestore';
import { db } from './config';

export async function resetCollection() {
   const collectionRef = collection(db, 'menu_item');

   while (true) {
      const q = query(collectionRef, limit(500));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
         break;
      }

      const batch = writeBatch(db);
      snapshot.docs.forEach((doc) => {
         batch.delete(doc.ref);
      });

      await batch.commit();
   }

   console.log(`Collection menu_item has been reset`);
}
