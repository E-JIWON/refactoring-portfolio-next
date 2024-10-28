// app/api/menu/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '@/_lib/firebase/config';
import { MenuListResponse } from '@/_types/menu';

/** @desc 메뉴 리스트 GET */
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const category = searchParams.get('category');

  if (!category) {
    return NextResponse.json({ message: '😅 카테고리 없어요.' }, { status: 400 });
  }

  try {
    const q = query(collection(db, 'menu_item'), where('category', '==', category));
    const querySnapshot = await getDocs(q);

    const data = querySnapshot.docs.map((doc) => {
      return doc.data();
    });

    return NextResponse.json(data);
  } catch (err) {
    console.error('Error fetching documents:', err);

    return NextResponse.json({ message: '🫡 패치 실패했어요.' }, { status: 500 });
  }
}
