'use server';

import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';

// Define local types matching your schema
export type Condition = 'excellent' | 'good' | 'fair' | 'poor';

export interface StuffData {
  id: number;
  name: string;
  quantity: number;
  condition: Condition;
  owner: string;
}

// Example: edit an existing “stuff” item
export async function editStuff(data: StuffData) {
  const { id, ...rest } = data;
  await prisma.studySession.update({
    where: { id },
    data: {
      // Map your fields appropriately—here as an example
      name: rest.name,
      quantity: rest.quantity,
      condition: rest.condition,
      owner: rest.owner,
    },
  });
  redirect('/list');
}

// Example: create a new “stuff” item
export async function createStuff(data: Omit<StuffData, 'id'>) {
  await prisma.studySession.create({
    data: {
      ...data,
    },
  });
  redirect('/list');
}

// (Adjust the above to your actual model—if your Prisma model is named differently,
// change prisma.studySession to prisma.yourModelName)
