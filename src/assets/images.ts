// src/assets/images.ts
import logo from "./logo.svg";

// именованные экспорты
export { logo };

// или один объект
export const IMAGES = {
  logo,
} as const;
