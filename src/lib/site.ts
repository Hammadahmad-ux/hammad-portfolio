// Section anchor used by the header, hero and service rows.
export const contactHref = "#contact";

export type ContactAction = {
  text: string;
  href: string;
  external?: boolean;
  accessibleName: string;
};

export type ContactMethod = {
  id: string;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  accessibleName: string;
  // Optional second route to the same number.
  secondary?: ContactAction;
};

// Single source of truth for the real contact details.
const whatsapp: ContactMethod = {
  id: "whatsapp",
  label: "WhatsApp",
  value: "+92 306 4233117",
  href: "https://wa.me/923064233117",
  external: true,
  accessibleName: "Message Hammad on WhatsApp",
};

const ukPhone: ContactMethod = {
  id: "uk",
  label: "UK",
  value: "+44 7882 764331",
  href: "tel:+447882764331",
  accessibleName: "Call Hammad on his UK number",
  secondary: {
    text: "WhatsApp",
    href: "https://wa.me/447882764331",
    external: true,
    accessibleName: "Message Hammad on WhatsApp using his UK number",
  },
};

const email: ContactMethod = {
  id: "email",
  label: "Email",
  value: "hammad@sadaworks.com",
  href: "mailto:hammad@sadaworks.com",
  accessibleName: "Email Hammad",
};

const github: ContactMethod = {
  id: "github",
  label: "GitHub",
  value: "github.com/hammadahmad-ux",
  href: "https://github.com/hammadahmad-ux/",
  external: true,
  accessibleName: "Visit Hammad's GitHub profile",
};

export const contactMethods: ContactMethod[] = [
  whatsapp,
  ukPhone,
  email,
  github,
];

// Fastest direct route; used by the main CTA.
export const whatsappHref = whatsapp.href;
