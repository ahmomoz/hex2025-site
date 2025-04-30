import type { PaginationData } from "@/types/article";

export interface ApiResponse<T = unknown> {
  status: number;
  message: string;
  data: T;
  pagination?: PaginationData;
}