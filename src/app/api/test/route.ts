import { NextRequest, NextResponse } from 'next/server';
import { testConnection } from '@/lib/db/db';

export const GET = async () => {
  await testConnection();
  return NextResponse.json({ message: 'Hello World!', status: 200 });
};
