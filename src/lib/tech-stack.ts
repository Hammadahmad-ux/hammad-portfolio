export type TechLane = {
  id: string;
  label: string;
  items: string[];
};

// Display strings are used verbatim in both marquee passes; nothing is invented here.
export const techLanes: TechLane[] = [
  {
    id: "product",
    label: "Product and development technologies",
    items: [
      "NEXT.JS",
      "REACT",
      "TYPESCRIPT",
      "NODE.JS",
      "NESTJS",
      "DJANGO",
      "PYTHON",
      "FLUTTER",
      "REACT NATIVE",
    ],
  },
  {
    id: "platform",
    label: "AI, backend and infrastructure technologies",
    items: [
      "n8n",
      "CLAUDE API",
      "GEMINI API",
      "AI VOICE AGENTS",
      "FIREBASE",
      "SUPABASE",
      "POSTGRESQL",
      "REDIS",
      "APACHE KAFKA",
      "WEBSOCKET",
      "DOCKER",
      "GOOGLE CLOUD",
      "STRIPE",
    ],
  },
];
