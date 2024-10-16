import { writeBatch, doc, collection } from 'firebase/firestore';
import { db } from './config';

// 여러 문서 추가 함수
export const addMultipleDocuments = async () => {
   const batch = writeBatch(db);

   const dataToAdd = [
      {
         id: 'americano',
         data: {
            category: 'coffee',
            price: 2000,
            productName: '아메리카노',
            picture: 'americano_C',
         },
      },
      {
         id: 'apple_tea',
         data: {
            category: 'new',
            price: 3400,
            productName: '애플 티',
            picture: 'autumn_apple_T',
         },
      },
      {
         id: 'bagel_chip',
         data: {
            category: 'Etc',
            price: 3500,
            productName: '바게트 칩',
            picture: 'bagel_chip',
         },
      },
      {
         id: 'choco_frappuccino',
         data: {
            category: 'Frappuccino',
            price: 4600,
            productName: '초코 쉐이크',
            picture: 'choco_F',
         },
      },
      {
         id: 'youth_berry_tea',
         data: {
            category: 'Tea',
            price: 4300,
            productName: '유스 베리 티',
            picture: 'i_youth_berry_T',
         },
      },
   ];

   dataToAdd.forEach(({ id, data }) => {
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
