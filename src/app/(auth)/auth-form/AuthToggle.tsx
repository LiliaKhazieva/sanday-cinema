"use client";
import { PUBLIC_PAGES } from "@/config/public.config";
import { useRouter } from "next/navigation";

export function AuthToggle({ isLogin }: { isLogin?: boolean }) {
  const router = useRouter();

  return (
    <div>
      {isLogin ? (
        <p>
          Нет аккаунта?{" "}
          <button
            type="button"
            onClick={() => router.push(PUBLIC_PAGES.REGISTER)}
          >
            Зарегистрироваться
          </button>
        </p>
      ) : (
        <p>
          Уже есть аккаунт?{" "}
          <button type="button" onClick={() => router.push(PUBLIC_PAGES.LOGIN)}>
            Войти
          </button>
        </p>
      )}
    </div>
  );
}
