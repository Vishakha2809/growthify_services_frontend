/* `crop` centres each face in a square/round frame: zoom factor plus a translate (in % of the frame) */
export type Crop = { zoom: number; x: number; y: number; position?: string };

export const team: { name: string; role: string; image: string; crop: Crop }[] = [
  {
    name: "Love Singh",
    role: "Co-Founder & Operations Head",
    image: "/company/teams/love.jpeg",
    crop: { zoom: 1.9, x: 8, y: 18 },
  },
  {
    name: "Amit Upadhyay",
    role: "Co-Founder & Tech Lead",
    image: "/company/teams/amit.jpeg",
    crop: { zoom: 1.5, x: 25, y: 24 },
  },
  {
    name: "Ayush Upadhyay",
    role: "Full Stack Developer",
    image: "/company/teams/ayush.jpeg",
    crop: { zoom: 1.35, x: 4, y: 8.5 },
  },
  {
    name: "Vishakha Rathod",
    role: "Backend Developer",
    image: "/company/teams/vishakha.jpeg",
    crop: { zoom: 1.25, x: 7, y: 12, position: "50% 0%" },
  },
];
