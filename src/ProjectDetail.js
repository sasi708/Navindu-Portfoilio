import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "./projectsData";

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
                onClick={() => openImage(index)}
                className="clickable-gallery-image"
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

export default ProjectDetail;