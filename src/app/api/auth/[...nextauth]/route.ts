
import NextAuth from 'next-auth';
import authOptions from '@/lib/authOptions';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


export default NextAuth({
  providers: [
    // Adding email/password credentials provider
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        // This is where you handle sign-up or login logic with a database
        const { email, password } = credentials;

        // Find user in the database (replace with actual database query)
        const user = await findUserByEmail(email);

        // If user exists, validate password (you can hash it in the DB)
        if (user && user.password === password) {
          return user; // successful login
        }

        // If user doesn't exist, create a new user (sign up)
        if (!user) {
          const newUser = await createUser(email, password);
          return newUser; // successful sign up
        }

        // If invalid credentials
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin', // Redirect user to sign in page
  },
  session: {
    strategy: 'jwt', // or 'database' if you use a DB for sessions
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Add user id or other data to the token
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id; // Pass user id to session
      return session;
    },
  },
});

// Example helper functions for user sign-up and finding user
async function findUserByEmail(email: string) {
  // Replace with actual DB query (e.g., using MongoDB, Prisma, etc.)
  return null; // Return a user if found or null if not found
}

async function createUser(email: string, password: string) {
  // Replace with actual DB query to create a new user
  const newUser = { id: 'new-id', email, password }; // Example user object
  // Save the new user to your DB
  return newUser;
}

