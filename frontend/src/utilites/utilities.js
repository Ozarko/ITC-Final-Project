import { link } from "../routes/navigationLink";

export function setColorTheme(styleType) {
  const root = document.documentElement.style;
  if (styleType === "dark") {
    root.setProperty("--rootStyleTypeColor", "#e3e0de");
    root.setProperty("--rootStyleTypeBg", "#181818");
  } else {
    root.setProperty("--rootStyleTypeColor", "#181818");
    root.setProperty("--rootStyleTypeBg", "#e3e0de");
  }
}

export function transleteName(name) {
  switch (name) {
    case "":
      return "Головна";
    case "about":
      return "Про Мене";
    case "contacts":
      return "Контакти";
    case "shop":
      return "Магазин";
    case "product":
      return "Магазин";
    default:
      return "error";
  }
}

export const outOfStock = (count) => {
  if (count > 0) {
    return true;
  }
  return false;
};

export const isMobile = () => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  }else {
    return false;
  }
};

export const themeStyle = (location) => {
  if (location.pathname === link.main) {
    setColorTheme("dark");
  } else {
    setColorTheme("light");
  }
};

export function rundomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
