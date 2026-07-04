import client, { unwrap } from "./client";
import type { LoginRequest, LoginResponse, AuthSession } from "@/types/api";

export function login(data: LoginRequest) {
  return unwrap<LoginResponse>(client.post("/admin/auth/login", data));
}

export function logout() {
  return unwrap<{ message: string }>(client.post("/auth/logout"));
}

export function logoutAll() {
  return unwrap<{ message: string }>(client.post("/auth/logout-all"));
}

export function getUserSessions() {
  return unwrap<AuthSession[]>(client.get("/auth/sessions"));
}

export function logoutSession(sid: string) {
  return unwrap<{ message: string }>(client.post(`/auth/sessions/${sid}/logout`));
}
