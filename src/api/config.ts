import client, { unwrap } from "./client";
import type { ConfigResponse, PaginatedResult } from "@/types/api";

export function searchConfigs(params?: { query?: string; page?: number; size?: number }) {
  return unwrap<PaginatedResult<ConfigResponse>>(client.get("/admin/config/search", { params }));
}

export function getConfig(key: string) {
  return unwrap<ConfigResponse>(client.get(`/config/${key}`));
}

export function createConfig(data: { key: string; value: string; value_type?: string; description?: string }) {
  return unwrap<ConfigResponse>(client.post("/admin/config", data));
}

export function updateConfig(key: string, data: { value: string; value_type?: string; description?: string }) {
  return unwrap<ConfigResponse>(client.put(`/admin/config/${key}`, data));
}

export function deleteConfig(key: string) {
  return unwrap<{ message: string }>(client.delete(`/admin/config/${key}`));
}
