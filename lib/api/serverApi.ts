
import { api } from "./api";
import type { User } from "@/types/user";

export const getMe = async () => {
  const { data } = await api.get<User>("/users/me");
  return data;
};
