import { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Login",
};

export default async function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-[url('/images/login-bg.jpg')] bg-cover">
      <LoginForm />
    </div>
  );
}
