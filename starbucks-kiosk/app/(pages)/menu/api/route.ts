// app/api/menu/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/_lib/firebaseConfig';

export async function GET(req: NextRequest) {
   try {
      const querySnapshot = await getDocs(collection(db, 'menu_item'));
      console.log('jiwon querySnapshot', querySnapshot);
      console.log('jiwon querySnapshotCode', querySnapshot.docs);
      const data = querySnapshot.docs.map((doc) => ({
         id: doc.id,
         ...doc.data(),
      }));
      console.log('jiwon data', data);
      return NextResponse.json({ data });
   } catch (err) {
      console.error('Error fetching documents:', err); // 에러 로그 추가
      return NextResponse.json(
         { error: 'Failed to fetch data' },
         { status: 500 },
      );
   }
}
