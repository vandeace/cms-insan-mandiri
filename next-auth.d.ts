import NextAuth, { DefaultSession } from 'next-auth';
import type { Session, Account, JWT } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    token?: accessToken;
    user: {
      token?: accessToken;
    } & DefaultSession['user'];
  }
  interface Account {
    access_token: accessToken;
    user: {
      token?: accessToken;
    } & DefaultSession['user'];
  }
}
