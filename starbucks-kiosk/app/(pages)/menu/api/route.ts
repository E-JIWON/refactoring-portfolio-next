// app/api/menu/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/_lib/firebase/config';
import { MenuItemData, MenuItemDTO } from '@/_types/menu';

/** @desc 메뉴 리스트 GET */
export async function GET(req: NextRequest) {
  try {
    const querySnapshot = await getDocs(collection(db, 'menu_item'));

    const data: MenuItemData[] = querySnapshot.docs.map((doc) => {
      return doc.data() as MenuItemData;
    });

    return NextResponse.json({ data });
  } catch (err) {
    console.error('Error fetching documents:', err);

    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
