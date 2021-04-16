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

export function setFooterStyle(styleType) {
  const root = document.documentElement.style;
  if (styleType === "dark") {
    root.setProperty("--footerRootStyleTypeColor", "#e3e0de");
    root.setProperty("--footerRootStyleTypeBg", "#181818");
  } else {
    root.setProperty("--footerRootStyleTypeColor", "#181818");
    root.setProperty("--footerRootStyleTypeBg", "#e3e0de");
  }
}

export const themeStyle = (location) => {
  switch (location.pathname) {
    case link.main:
      setColorTheme("dark");
      setFooterStyle("light");
      break;
    case link.login:
      setColorTheme("dark");
      setFooterStyle("dark");
      break;
    case link.registration:
      setColorTheme("dark");
      setFooterStyle("dark");
      break;
    case link.profile:
      setColorTheme("dark");
      setFooterStyle("dark");
      break;
    default:
      setColorTheme("light");
      setFooterStyle("light");
  }
};


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
    case "profile":
      return "Особистий кабінет користувача";
    default:
      return "Назва відсутня";
  }
}

export const outOfStock = (count) => {
  if (count > 0) {
    return true;
  }
  return false;
};

export function rundomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const isMobile = () => {
  if (/Mobi/.test(navigator.userAgent)) {
    return true;
  } else {
    return false;
  }
};

export const subtotal = (arr) => {
  return arr.reduce((acc, product) => {
    return acc += (product.qty * product.price ) 
  }, 0)
}