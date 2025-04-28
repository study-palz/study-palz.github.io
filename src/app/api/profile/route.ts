// pages/api/profile.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import  authOptions  from '@/lib/authOptions'; 
import { prisma } from '@/lib/prisma'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (!session || !session.user?.email) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) return res.status(404).json({ error: 'User not found' });

  if (req.method === 'GET') {
    const profile = await prisma.userProfile.findUnique({
      where: { userId: user.id },
    });
    return res.status(200).json(profile);
  }

  if (req.method === 'POST') {
    const { firstName, lastName, profileImage, coursesTaken, coursesHelped } = req.body;

    const profile = await prisma.userProfile.upsert({
      where: { userId: user.id },
      update: {
        firstName,
        lastName,
        profileImage,
        coursesTaken,
        coursesHelped,
      },
      create: {
        userId: user.id,
        firstName,
        lastName,
        profileImage,
        coursesTaken,
        coursesHelped,
      },
    });

    return res.status(200).json(profile);
  }

  return res.status(405).end(); // Method not allowed
}
