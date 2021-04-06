export const link = {
  main: "/",
  shop: "/shop",
  about: "/about",
  contact: "/contacts",
  productID: "/product/:id",
  productDetailes: "/product-details",
  signin: "/signin",
  profile: "/profile",
  shipping: '/shipping',
  shippingAndReturns: "/shipping-and-returns",
  recommendationForCare: "/recommendation-for-care",
  paymentDetails: "/payment-details",
  legalAndPrivacy: "/legal&privacy",
  trackAndOrders: "/track&orders",
};

export const menuLinks = [
  { to: link.main, label: "Головна", exact: true },
  { to: link.shop, label: "Магазин", exact: false },
  { to: link.about, label: "Про Мене", exact: false },
  { to: link.contact, label: "Контакти", exact: false },
];

