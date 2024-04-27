import NextAuth, { CredentialsSignin, User } from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";

async function getUser(
  email: string,
  password: string
): Promise<User | undefined> {
  try {
    const res = await fetch(`${process.env.BE_URL_PRODUCTION}api/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const user = await res.json();
    if (user.status == "OK") {
      return user.data;
    } else {
      return undefined;
    }
  } catch (error) {
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email, password);

          if (!user) {
            return null;
          } else {
            return user as any;
          }
        }
      },
    }),
  ],
});
