export const CONTACT_EMAIL = "info@zoviathuiszorg.nl";
export const WHATSAPP_NUMBER = "31612345678";

export const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/zorgaanbod", label: "Zorgaanbod" },
  { to: "/werkwijze", label: "Werkwijze" },
  { to: "/werkgebied", label: "Werkgebied" },
  { to: "/werken-bij-ons", label: "Werken bij ons" },
  { to: "/contact-zorg-aanvragen", label: "Contact / Zorg aanvragen", cta: true }
];

export const waLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
