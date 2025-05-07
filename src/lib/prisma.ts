import { PrismaClient } from '@prisma/client';
import { cache } from 'react'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
    // ✅ Disable prepared statements (avoids "$x already exists" error)
    datasources: {
      db: {
        url: process.env.DATABASE_URL + '?pgbouncer=true',
      },
    },
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

export { prisma };