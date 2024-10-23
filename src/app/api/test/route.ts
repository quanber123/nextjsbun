import { connectDb } from '@/lib/db/db';
import { TestModel } from '@/lib/models/test.schema';
import { NextResponse } from 'next/server';

export const GET = async () => {
  await connectDb();
  const value = 'Hello World!';
  const existedValue = await TestModel.findOne({
    value: value,
  });
  if (existedValue) {
    return NextResponse.json({ message: `${value} đã tồn tại`, status: 409 });
  } else {
    const testString = new TestModel({
      value: 'Hello World!',
    });
    const testValue = await testString.save();
    return NextResponse.json({ message: testValue?.value, status: 200 });
  }
};
