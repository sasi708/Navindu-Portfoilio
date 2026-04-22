import p1cover from "./assets/projects/project1/cover.jpg";
import p1img1 from "./assets/projects/project1/photo1.jpg";
import p1img2 from "./assets/projects/project1/photo2.jpg";

import p3cover from "./assets/projects/project3/cover.jpg";
import p3img1 from "./assets/projects/project3/photo1.jpg";
import p3video from "./assets/projects/project3/video1.mp4";

import p4cover from "./assets/projects/project4/cover.jpg";
import p4img1 from "./assets/projects/project4/photo1.jpg";

export const projects = [
  {
    id: 1,
    title: "LONO PUREX",
    short: "Plasma-based hybrid water purification system",
    cover: p1cover,
    images: [p1img1, p1img2],
    video: null,
    description:
      "LONO PUREX is a plasma-based hybrid water purification and sterilization system integrating corona discharge, aeration, and UV technology. It generates reactive oxygen species to remove pathogens and contaminants efficiently. Designed for low power consumption and real-world scalability.",
  },

  {
    id: 3,
    title: "AQUA INTEL",
    short: "Smart water quality monitoring boat",
    cover: p3cover,
    images: [p3img1],
    video: p3video,
    description:
      "AQUA INTEL is an Arduino-based smart boat designed to monitor water quality parameters such as pH, temperature, EC, and TDS. It enables real-time data collection and remote monitoring, supporting sustainable water management.",
  },

  {
    id: 4,
    title: "Compo Tech",
    short: "Automated composting system",
    cover: p4cover,
    images: [p4img1],
    video: null,
    description:
      "Compo Tech is an automated composting system designed to convert organic waste into compost using controlled temperature and mixing mechanisms. It promotes sustainable waste management and eco-friendly practices.",
  },
];