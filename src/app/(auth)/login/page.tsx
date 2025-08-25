import { Metadata } from "next";
import { AuthForm } from "../auth-form/AuthForm";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div>
      <div>
        <h2>Sing In</h2>
        <AuthForm isLogin />
      </div>
    </div>
  );
}
