import Cookies from "js-cookie";
import { AuthToken } from "./auth.service";

export const getAccessToken = () => {
  const accessToken = Cookies.get(AuthToken.ACCESS_TOKEN);
  return accessToken || null;
};

export const saveTokenStorage = (accessToken: string) => {
  Cookies.set(AuthToken.ACCESS_TOKEN, accessToken, {
    domain: "localhost",
    sameSite: "strict",
    // 1 day
    expires: 1,
  });
};

export const removeFromStorage = () => {
  Cookies.remove(AuthToken.ACCESS_TOKEN);
};
