import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';

// This is a mock user database. In a real application, you'd use a proper database.
const users = [
  { id: '1', name: 'User 1', email: 'user1@example.com', password: '$2b$10$Gg8Aw9Xj9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9' },
  { id: '2', name: 'User 2', email: 'user2@example.com', password: '$2b$10$Gg8Aw9Xj9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9Ib9' },
];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials) return null;
        
        const user = users.find(user => user.email === credentials.email);
        if (user && await compare(credentials.password, user.password)) {
          return { id: user.id, name: user.name, email: user.email };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const authHandler = NextAuth(authOptions);

export default async function handler(req, res) {
  // Add logging to help diagnose the issue
  console.log('NextAuth API route hit:', req.method, req.url);
  
  try {
    await authHandler(req, res);
  } catch (error) {
    console.error('NextAuth error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}