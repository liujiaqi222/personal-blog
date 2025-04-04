import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  return new Date(input).toLocaleDateString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
}

