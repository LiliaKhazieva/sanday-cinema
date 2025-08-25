import { ISimpleCartItem } from "@/types/cart.types";
import { IFormData, UserRole } from "@/types/user.types";
import { removeFromStorage, saveTokenStorage } from "./auth.helper";
import { axiosClassic } from "@/api/axios";

export const AuthToken = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
} as const;

export interface IUser {
  id: number;
  name?: string;
  email: string;
  avatarPath?: string;
  verificationToken?: string;
  rights: UserRole[];
}

interface IAuthResponse {
  accessToken: string;
  user: IUser;
}

class AuthService {
  async main(
    type: "login" | "register",
    data: IFormData,
    cartItems?: ISimpleCartItem[]
  ) {
    const response = await axiosClassic.post<IAuthResponse>(
      `/auth/${type}`,
      cartItems?.length ? { ...data, cartItems } : data
    );

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response;
  }

  async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>(
      "/auth/access-token"
    );

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response;
  }

  async getNewTokensByRefresh(refreshToken: string) {
    const response = await axiosClassic.post<IAuthResponse>(
      "/auth/access-token",
      {},
      {
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
      }
    );

    return response.data;
  }

  async logout() {
    const response = await axiosClassic.post<boolean>("/auth/logout");

    if (response.data) removeFromStorage();

    return response;
  }
}

export default new AuthService();
