import authService, { AuthToken } from "@/services/auth/auth.service";
import { cookies } from "next/headers";
import {
  transformUserToState,
  TUserDataState,
} from "../transform-user-to-state";
import { ITokenInside } from "@/types/user.types";
import { jwtVerify } from "jose";

export async function getServerAuth(): Promise<TUserDataState | null> {
  const JWT_SECRET = process.env.JWT_SECRET;
  const cookie = await cookies();

  let accessToken = cookie.get(AuthToken.ACCESS_TOKEN)?.value;
  const refreshToken = cookie.get(AuthToken.REFRESH_TOKEN)?.value;

  if (!refreshToken) return null;

  if (!accessToken) {
    try {
      const data = await authService.getNewTokensByRefresh(refreshToken);
      accessToken = data.accessToken;
    } catch (error) {
      return null;
    }
  }

  try {
    const { payload }: { payload: ITokenInside } = await jwtVerify(
      accessToken,
      new TextEncoder().encode(`${JWT_SECRET}`)
    );

    if (!payload) return null;

    return transformUserToState(payload);
  } catch (error) {
    return null;
  }
}
