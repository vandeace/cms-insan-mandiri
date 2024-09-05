import { NextAuthConfig } from 'next-auth';
import { addDays, formatISO } from 'date-fns';
import { TUserToken } from './types/auth';
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    jwt: async ({ token, user, account }) => {
      return { ...token, ...user, ...account };
    },
    session: async ({ token, session, user }) => {
      const data = token as unknown as TUserToken;
      const today = new Date();
      const sessionEndDate = addDays(today, 6);
      const newSession = {
        ...session,
        token: data.token.token,
        expires: formatISO(sessionEndDate),
        authenticated: data.data.role !== ('USER' as unknown as string),
        user: {
          id: data.data.id,
          email: data.data.email,
          name: data.data.name,
          image: data.data.photo,
          role: data.data.role,
        },
      };
      return newSession;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
