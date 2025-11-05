// src/assets/images.ts
import logo from "./logo.svg";
import avatar1 from "./avatar1.svg";
import avatar2 from "./avatar2.svg";
import avatar3 from "./avatar3.svg";

// именованные экспорты
export { logo, avatar1, avatar2, avatar3 };

// или один объект
export const IMAGES = {
  logo,
  avatar1,
  avatar2,
  avatar3,
} as const;
