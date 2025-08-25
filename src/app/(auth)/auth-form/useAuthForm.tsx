"use client";
import authService from "@/services/auth/auth.service";
import { useGuestCartStore } from "@/store/store";
import { IFormData } from "@/types/user.types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export function useAuthForm(isLogin: boolean) {
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<IFormData>();

  const { mutate: mutateLogin, isPending: isLoginPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: IFormData) => authService.main("login", data),
    onSuccess() {
      reset();
      router.push("/");
    },
    onError(error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message);
      }
    },
  });

  const guestItems = useGuestCartStore((s) => s.items);

  const { mutate: mutateRegister, isPending: isRegisterPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: IFormData) =>
      authService.main("register", data, guestItems),
    onSuccess() {
      reset();
      router.push("/");
    },
    onError(error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message);
      }
    },
  });

  const onSubmit = (data: IFormData) => {
    if (isLogin) {
      mutateLogin(data);
    } else {
      mutateRegister(data);
    }
  };

  const isLoading = isLoginPending || isRegisterPending;

  return {
    register,
    handleSubmit,
    onSubmit,
    isLoading,
  };
}
