'use server';

import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';

// Change Password Action
export async function changePassword(userId: number, newPassword: string) {
  const hashed = await hash(newPassword, 10);
  await prisma.user.update({
    where: { id: userId },
    data: { password: hashed },
  });
  redirect('/profile');
}

// Shared Condition type
export type Condition = 'excellent' | 'good' | 'fair' | 'poor';

// Data shape for Stuff operations
export interface StuffData {
  id: number;
  name: string;
  quantity: number;
  condition: Condition;
  owner: string;
}

// Create a new “stuff” item
export async function addStuff(data: Omit<StuffData, 'id'>) {
  await prisma.studySession.create({
    data: {
      name: data.name,
      quantity: data.quantity,
      condition: data.condition,
      owner: data.owner,
    },
  });
  redirect('/list');
}

// Edit an existing “stuff” item
export async function editStuff(data: StuffData) {
  const { id, ...rest } = data;
  await prisma.studySession.update({
    where: { id },
    data: {
      name: rest.name,
      quantity: rest.quantity,
      condition: rest.condition,
      owner: rest.owner,
    },
  });
  redirect('/list');
}
