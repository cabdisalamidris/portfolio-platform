import { useState } from "react";

export default function useProjects() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Portfolio Website", description: "Personal site" },
    { id: 2, title: "E-commerce App", description: "Online store" }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (newProject) => {
    setProjects((prev) => [
      ...prev,
      { ...newProject, id: Date.now() }
    ]);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    projects: filteredProjects,
    addProject,
    setSearchTerm
  };
}