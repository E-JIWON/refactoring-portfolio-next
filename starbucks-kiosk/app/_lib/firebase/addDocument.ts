import { writeBatch, doc, collection } from 'firebase/firestore';
import { db } from './config';
import { menuItems } from '@/_mock/menuItems';

/**
 * @desc 문서 배치 작업
 *
 */
export const addMultipleDocuments = async () => {
   const batch = writeBatch(db);

   menuItems.forEach(({ id, data }) => {
      const docRef = doc(collection(db, 'menu_item'), id);

      batch.set(docRef, data);
   });

   try {
      await batch.commit();
      console.log('Documents added successfully!');
   } catch (error) {
      console.error('Error adding documents: ', error);
   }
};
