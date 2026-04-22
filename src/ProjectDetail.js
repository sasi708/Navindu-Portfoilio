import { useParams, Link } from "react-router-dom";
import { projects } from "./projectsData";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <h2>Project not found</h2>;

  return (
    <div style={{ padding: "100px 20px", color: "white" }}>
      <Link to="/" style={{ color: "#22c55e" }}>← Back</Link>

      <h1 style={{ marginTop: "20px" }}>{project.title}</h1>
      <p style={{ marginTop: "10px" }}>{project.description}</p>

      <div style={{ marginTop: "30px" }}>
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            style={{ width: "300px", margin: "10px", borderRadius: "10px" }}
          />
        ))}
      </div>

      {project.video && (
        <video
          src={project.video}
          controls
          style={{ marginTop: "30px", width: "500px" }}
        />
      )}
    </div>
  );
}

export default ProjectDetail;