"use client";
import clsx from "clsx";
import { useAuthForm } from "./useAuthForm";
import { AuthToggle } from "./AuthToggle";

export function AuthForm({ isLogin }: { isLogin: boolean }) {
  const { handleSubmit, isLoading, onSubmit, register } = useAuthForm(isLogin);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Email
          <input
            type="email"
            placeholder="Enter email: "
            {...register("email", { required: true })}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="text-gray-700">
          Пароль
          <input
            type="password"
            placeholder="Enter password: "
            {...register("password", { required: true })}
          />
        </label>
      </div>

      <div className="mb-3">
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Загрузка..." : isLogin ? "Войти" : "Зарегистрироваться"}
        </button>
      </div>

      {/* <SocialMediaButtons /> */}

      <AuthToggle isLogin={isLogin} />
    </form>
  );
}
