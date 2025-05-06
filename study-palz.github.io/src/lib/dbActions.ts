/* eslint-disable no-console */
'use server';

import { hash, compare } from 'bcrypt';
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
  try {
    const { email, oldpassword, password } = input;

    // Find the user by email
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error('User not found');
    }

    // Compare the old password with the stored password
    const isPasswordValid = await compare(oldpassword, user.password);

    if (!isPasswordValid) {
      throw new Error('Current password is incorrect');
    }

    // Hash the new password
    const hashedPassword = await hash(password, 10);

    // Update the password in the database
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
