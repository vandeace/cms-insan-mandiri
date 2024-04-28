import { NextAuthConfig } from "next-auth";
import { addDays, formatISO } from "date-fns";
import { TTokenData } from "./types/auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      return { ...token, ...user, ...account };
    },
    session: async ({ token, session }) => {
      const newToken = token as unknown as TTokenData;
      const today = new Date();
      const sessionEndDate = addDays(today, 6);
      const newSession = {
        ...session,
        expires: formatISO(sessionEndDate),
        authenticated: newToken.data.role !== ("USER" as unknown as string),
        user: {
          id: newToken.data.id,
          token: newToken.token.token,
          email: newToken.data.email,
          name: newToken.data.name,
          image: newToken.data.photo,
          role: newToken.data.role,
        },
      };
      return newSession;
    },
    // async signIn({ user }) {
    //   const isAllowedToSignIn = user.data.role !== "USER";
    //   return isAllowedToSignIn ? true : "/auth/login";
    // },
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
