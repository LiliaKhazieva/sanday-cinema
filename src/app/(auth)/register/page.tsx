import { Metadata } from "next";
import { AuthForm } from "../auth-form/AuthForm";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <div>
      <div>
        <h2>Sign Up</h2>
        <AuthForm isLogin={false} />
      </div>
    </div>
  );
}
