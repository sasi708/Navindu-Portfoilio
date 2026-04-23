import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaLeaf,
  FaBars,
  FaTimes,
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";
import profile from "./profile.jpg";

import p1cover from "./assets/projects/project1/cover.jpg";
import p1img1 from "./assets/projects/project1/photo1.jpg";
import p1img2 from "./assets/projects/project1/photo2.jpg";

import p3cover from "./assets/projects/project3/cover.jpg";
import p3img1 from "./assets/projects/project3/photo1.jpg";
import p3video from "./assets/projects/project3/video1.mp4";

import p4cover from "./assets/projects/project4/cover.jpg";
import p4img1 from "./assets/projects/project4/photo1.jpg";

const projects = [
  {
    id: 1,
    title: "LONO PUREX",
    shortDescription:
      "Plasma-based hybrid water purification and surface sterilization system.",
    fullDescription:
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
    shortDescription:
      "Arduino-based smart boat for real-time water quality monitoring.",
    fullDescription:
      "AQUA INTEL is an innovative Arduino-based project developed to monitor water quality in a smart and efficient manner. This autonomous boat is equipped with multiple sensors to measure key parameters such as pH, temperature, electrical conductivity, total dissolved solids (TDS), water depth, salinity, and visibility. The system collects real-time data while navigating through water bodies, significantly reducing the need for manual sampling and laboratory analysis. With integrated GPS and communication modules, AQUA INTEL enables remote monitoring and accurate location tracking, making it a practical solution for environmental monitoring.",
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
    shortDescription:
      "Automated compost bin for efficient organic waste management.",
    fullDescription:
      "Compo Tech is an innovative automated composting system designed to efficiently manage organic waste in urban environments. This smart compost bin is developed to convert kitchen and biodegradable waste into compost through a controlled and automated process. The system is programmed to manage key composting functions such as timed rotation and temperature control, ensuring optimal conditions for faster and more effective decomposition. It promotes sustainable waste management, reduces environmental pollution, and encourages eco-friendly practices.",
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

function Navbar({ menuOpen, setMenuOpen, activeSection }) {
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">
        <FaLeaf className="logo-icon" />
        Navindu
      </a>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a
          href="#home"
          onClick={closeMenu}
          className={activeSection === "home" ? "active" : ""}
        >
          Home
        </a>
        <a
          href="#about"
          onClick={closeMenu}
          className={activeSection === "about" ? "active" : ""}
        >
          About
        </a>
        <a
          href="#skills"
          onClick={closeMenu}
          className={activeSection === "skills" ? "active" : ""}
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={closeMenu}
          className={activeSection === "projects" ? "active" : ""}
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={closeMenu}
          className={activeSection === "contact" ? "active" : ""}
        >
          Contact
        </a>
      </div>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const skills = [
    "Agriculture",
    "Agri Technology",
    "Digital Agriculture",
    "Data Analysis",
    "Automation",
    "Sustainable Farming",
    "IoT Applications",
    "Precision Agriculture",
    "Smart Farming Systems",
    "Agricultural Data Analytics",
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const onScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });

      if (window.scrollY < 200) current = "home";
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app">
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>
      <div className="floating-shape shape3"></div>

      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
      />

      <section className="section hero" id="home">
        <div className="bg-circle circle1"></div>
        <div className="bg-circle circle2"></div>

        <div className="content hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.p
              className="small-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              WELCOME TO MY PORTFOLIO
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              Hi, I’m <span>Navindu Vimansara</span>
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Undergraduate | Smart Agriculture | Data Driven Agriculture
            </motion.h3>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              I am an Agriculture undergraduate with a strong interest in
              Agri-Technology, ICT-driven solutions, and programming. I am
              committed to integrating agricultural knowledge with modern
              technologies such as data analytics, Internet of Things, and smart
              farming systems to enhance productivity, promote sustainability,
              and support informed decision-making in agriculture.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            >
              <a href="#projects" className="btn">
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image-box"
            initial={{ opacity: 0, x: 80, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.03, rotate: -1 }}
          >
            <div className="image-glow"></div>
            <img src={profile} alt="Profile" className="profile-image" />
          </motion.div>
        </div>

        <motion.a
          href="#about"
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          Scroll Down
        </motion.a>
      </section>

      <section className="section about" id="about">
        <motion.div
          className="content section-card"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>About Me</h2>
          <p>
            I am an Agriculture undergraduate with a strong interest in
            Agri-Technology, ICT-driven solutions, and programming. I am
            committed to integrating agricultural knowledge with modern
            technologies such as data analytics, Internet of Things, and smart
            farming systems to enhance productivity, promote sustainability,
            and support informed decision-making in agriculture.
          </p>
        </motion.div>
      </section>

      <section className="section skills" id="skills">
        <motion.div
          className="content section-card"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                whileHover={{ scale: 1.08, y: -8 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section projects" id="projects">
        <motion.div
          className="content section-card"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Projects</h2>

          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link to={`/project/${project.id}`} className="project-link">
                  <motion.div
                    className="project-card"
                    whileHover={{ y: -10, scale: 1.03 }}
                  >
                    <img
                      src={project.cover}
                      alt={project.title}
                      className="project-cover"
                    />
                    <h3>{project.title}</h3>
                    <p>{project.shortDescription}</p>
                    <span className="project-btn">View Details</span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section contact" id="contact">
        <motion.div
          className="content section-card contact-card"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2>Contact Me</h2>

          <div className="contact-links">
            <motion.a
              href="mailto:navinduvimansara@gmail.com"
              className="contact-item"
              whileHover={{ scale: 1.03, x: 6 }}
            >
              <FaEnvelope className="contact-icon" />
              <span>navinduvimansara@gmail.com</span>
            </motion.a>

            <motion.a
              href="tel:+94766166650"
              className="contact-item"
              whileHover={{ scale: 1.03, x: 6 }}
            >
              <FaPhoneAlt className="contact-icon" />
              <span>+94 76 616 6650</span>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/navindu-vimansara-62a498404"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
              whileHover={{ scale: 1.03, x: 6 }}
            >
              <FaLinkedin className="contact-icon" />
              <span>LinkedIn Profile</span>
            </motion.a>

            <motion.a
              href="https://github.com/Navindu2003"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
              whileHover={{ scale: 1.03, x: 6 }}
            >
              <FaGithub className="contact-icon" />
              <span>GitHub Profile</span>
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <div className="detail-page">
        <div className="detail-container">
          <Link to="/" className="back-link">
            <FaArrowLeft /> Back to Home
          </Link>
          <h1>Project not found</h1>
        </div>
      </div>
    );
  }

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="detail-page">
      <div className="detail-bg-circle detail-circle1"></div>
      <div className="detail-bg-circle detail-circle2"></div>

      <div className="detail-container">
        <Link to="/" className="back-link">
          <FaArrowLeft /> Back to Home
        </Link>

        <motion.div
          className="detail-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="detail-text">
            <p className="detail-tag">PROJECT DETAILS</p>
            <h1>{project.title}</h1>
            <p className="detail-description">{project.fullDescription}</p>

            <div className="detail-meta">
              <div className="meta-box">
                <h4>Exhibition / Achievement</h4>
                <p>{project.exhibition}</p>
              </div>
            </div>
          </div>

          <div className="detail-cover-wrap">
            <img
              src={project.cover}
              alt={project.title}
              className="detail-cover"
            />
          </div>
        </motion.div>

        {project.isCollaborative && (
          <motion.div
            className="detail-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <h2>👥 Team Members (Collaborative Project)</h2>
            <ul className="team-list">
              {project.team.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          </motion.div>
        )}

        <motion.div
          className="detail-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
        >
          <h2>Technologies / Key Areas</h2>
          <div className="tech-grid">
            {project.tech.map((item, index) => (
              <div className="tech-pill" key={index}>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="detail-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          <h2>Project Gallery</h2>
          <div className="detail-gallery">
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} ${index + 1}`}
                className="clickable-gallery-image"
                onClick={() => openImage(index)}
              />
            ))}
          </div>
        </motion.div>

        {project.video && (
          <motion.div
            className="detail-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            <h2>Project Video</h2>
            <div className="video-wrap">
              <video controls className="detail-video">
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        )}
      </div>

      {selectedImage !== null && (
        <div className="image-modal" onClick={closeImage}>
          <button
            className="modal-close"
            onClick={(e) => {
              e.stopPropagation();
              closeImage();
            }}
          >
            <FaTimes />
          </button>

          {project.images.length > 1 && (
            <button className="modal-nav modal-prev" onClick={showPrev}>
              <FaChevronLeft />
            </button>
          )}

          <img
            src={project.images[selectedImage]}
            alt="Selected"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />

          {project.images.length > 1 && (
            <button className="modal-nav modal-next" onClick={showNext}>
              <FaChevronRight />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;