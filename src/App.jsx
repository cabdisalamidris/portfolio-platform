import useProjects from "./hooks/useProjects";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import "./App.css";

function App() {
  const { projects, addProject, setSearchTerm } = useProjects();

  return (
    <div className="container">
      <h1>Creative Portfolio</h1>

      <SearchBar setSearchTerm={setSearchTerm} />
      <AddProjectForm addProject={addProject} />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;