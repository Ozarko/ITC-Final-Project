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
  switch(name) {
    case '': 
      return 'Головна'
    case 'about':
      return "Про Мене";
    case 'contacts':
      return "Контакти";
    case 'shop':
      return 'Магазин';
    case 'product':
      return 'Магазин';
    default:
      return "error";
  }
}

