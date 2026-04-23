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
    shortDescription: "Plasma-based hybrid water purification and surface sterilization system.",
    description:
      "LONO PUREX is a collaborative innovation designed as a plasma-based hybrid water purification and surface sterilization system. It integrates plasma corona discharge, aeration, and ultraviolet irradiation into one compact and energy-efficient system. Through this hybrid process, the system generates highly reactive oxygen species such as hydroxyl radicals, atomic oxygen, ozone, and hydrogen peroxide. These reactive species help degrade microbial pathogens, pesticide residues, and organic contaminants without creating harmful chemical by-products. The system operates on low power and supports practical real-world applications including household water purification, agricultural post-harvest washing, food processing, and healthcare sterilization.",
    cover: p1cover,
    images: [p1img1, p1img2],
    video: null,
    exhibition: "Pro Food Pro Pack Agri Biz 2025",
    tech: [
      "Plasma Corona Discharge",
      "UV Irradiation",
      "Aeration",
      "Water Purification",
      "Surface Sterilization",
      "Low Power Design",
    ],
    isCollaborative: true,
    team: [
      "W.N.V. Weraniyagoda",
      "S.D. Koshitha Bhagya Tharaka",
      "W.A.R.K. Wickramasinghe",
      "W.R.T.A. Bandara",
    ],
  },
  {
    id: 3,
    title: "AQUA INTEL",
    shortDescription: "Arduino-based smart boat for real-time water quality monitoring.",
    description:
      "AQUA INTEL is an innovative Arduino-based project developed to monitor water quality in a smart and efficient manner. This autonomous boat is equipped with multiple sensors to measure key parameters such as pH, temperature, electrical conductivity, TDS, water depth, salinity, and visibility. The system collects real-time data while navigating through water bodies, reducing the need for manual sampling and laboratory analysis. With integrated GPS and communication modules, AQUA INTEL supports remote monitoring and accurate location tracking. It demonstrates the effective integration of IoT, automation, and environmental science in real-world applications.",
    cover: p3cover,
    images: [p3img1],
    video: p3video,
    exhibition: "Winner – Best Green Innovation | Pro Food Pro Pack Agri Biz 2024",
    tech: [
      "Arduino",
      "IoT",
      "Water Quality Sensors",
      "GPS",
      "Automation",
      "Environmental Monitoring",
    ],
    isCollaborative: true,
    team: [
      "W.N.V. Weraniyagoda",
      "S.D. Koshitha Bhagya Tharaka",
      "W.A.R.K. Wickramasinghe",
    ],
  },
  {
    id: 4,
    title: "Compo Tech",
    shortDescription: "Automated compost bin for efficient organic waste management.",
    description:
      "Compo Tech is an innovative automated composting system designed to efficiently manage organic waste in urban environments. This smart compost bin converts kitchen and biodegradable waste into compost through a controlled and automated process. The system manages key composting functions such as timed rotation and temperature control, ensuring optimal conditions for faster and more effective decomposition. It promotes sustainable waste management, reduces environmental pollution, and encourages eco-friendly practices in urban living.",
    cover: p4cover,
    images: [p4img1],
    video: null,
    exhibition: "Pro Food Pro Pack Agri Biz 2025",
    tech: [
      "Automation",
      "Temperature Control",
      "Timed Rotation",
      "Waste Management",
      "Composting System",
      "Sustainable Technology",
    ],
    isCollaborative: true,
    team: [
      "W.N.V. Weraniyagoda",
      "S.D. Koshitha Bhagya Tharaka",
      "W.A.R.K. Wickramasinghe",
      "G.K. Pasindu Dilhan",
    ],
  },
];