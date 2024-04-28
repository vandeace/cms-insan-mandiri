"use server";
import { auth, signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(formData: any) {
  try {
    await signIn("credentials", { ...formData, redirectTo: "/dashboard" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
export async function disconnect() {
  try {
    await signOut({
      redirectTo: "/login",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
