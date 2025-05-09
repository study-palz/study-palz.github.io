/* eslint-disable no-console */
'use server';

import { hash, compare } from 'bcrypt';
import { prisma } from './prisma';

export type ChangePasswordInput = {
  email: string;
  oldpassword: string;
  password: string;
  confirmPassword: string;
};

export async function changePassword(input: ChangePasswordInput) {
  try {
    const { email, oldpassword, password } = input;


    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error('User not found');
    }

    
    const isPasswordValid = await compare(oldpassword, user.password);

    if (!isPasswordValid) {
      throw new Error('Current password is incorrect');
    }

    const hashedPassword = await hash(password, 10);

    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    return { success: true };
  } catch (error) {
    console.error('Error changing password:', error);
    throw new Error('There was an issue changing your password. Please try again.');
  }
}