import { NextAuthConfig } from "next-auth";
import { addDays, formatISO } from "date-fns";
import { TToken, TTokenData } from "./types/auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      return { ...token, ...user, ...account };
    },
    session: async ({ token, session }) => {
      const data = token.data as unknown as TTokenData;
      const tokenData = token.token as TToken;
      const today = new Date();
      const sessionEndDate = addDays(today, 6);
      const newSession = {
        ...session,
        expires: formatISO(sessionEndDate),
        authenticated: data.role !== ("USER" as unknown as string),
        user: {
          id: data.id,
          email: data.email,
          name: data.name,
          image: data.photo,
          role: data.role,
          token: tokenData.token,
        },
      };
      return newSession;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
