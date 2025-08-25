export enum UserRole {
  USER = "USER",
  PREMIUM = "PREMIUM",
  MANAGER = "MANAGER",
  ADMIN = "ADMIN",
}

export interface ITokenInside {
  id: number;
  rights: UserRole[];
  iat: number;
  exp: number;
}

export type TProtectUserData = Omit<ITokenInside, "iat" | "exp">;

export interface IUser {
  id: number;
  name?: string;
  email: string;
  avatarPath?: string;
  verificationToken?: string;
  rights: UserRole[];
}

export interface IFormData {
  email: string;
  password: string;
}
