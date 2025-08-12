import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function cnn(...inputs) {
  return twMerge(clsx(inputs));
}

