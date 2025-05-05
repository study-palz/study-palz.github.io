/* eslint-disable no-console */
// dbActions.ts
'use server';

import { compare, hash } from 'bcrypt';
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
  const { email, oldpassword, password } = input;

  try {
    // Step 1: Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error('User not found');
    }

    // Step 2: Check if the old password matches the stored password
    const isOldPasswordValid = await compare(oldpassword, user.password);
    if (!isOldPasswordValid) {
      throw new Error('Old password is incorrect');
    }

    // Step 3: Hash the new password
    const hashedPassword = await hash(password, 10);

    // Step 4: Update the password in the database
    await prisma.user.update({
      where: { email },
      data: { password: hashedPassword },
    });

    // Return success message or value
    return 'Password changed successfully';
  } catch (error) {
    console.error('Error changing password:', error);
    throw new Error('There was an issue changing your password. Please try again.');
  }
}
