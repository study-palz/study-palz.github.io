'use server';

import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';

// Change Password Input type
export type ChangePasswordInput = {
  email: string;
  oldpassword: string;
  password: string;
  confirmPassword: string;
};

// Change Password Action
export async function changePassword(input: ChangePasswordInput) {
  const { email, password } = input;
  const hashed = await hash(password, 10);
  await prisma.user.update({
    where: { email },
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
