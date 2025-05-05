// lib/prisma.ts

import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  });

// ✅ Only assign to global in development
if (process.env.NODE_ENV === 'development') {
  globalForPrisma.prisma = prisma;
}
