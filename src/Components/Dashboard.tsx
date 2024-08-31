import React, { useState } from 'react';
import './Dashboard.css';

// Define the Project interface
interface Project {
  id: number;
  title: string;
  description: string;
}

// Modal component
const Modal: React.FC<{ show: boolean; onClose: () => void; onSubmit: (title: string, description: string) => void }> = ({ show, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    onSubmit(title, description);
    setTitle(''); // Reset the title field
    setDescription(''); // Reset the description field
    onClose(); // Close the modal after submitting
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Create New Project</h3>
        <input 
          type="text" 
          placeholder="Project Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <textarea 
          placeholder="Project Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        <button onClick={handleSubmit}>Create Project</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const createNewProject = (title: string, description: string) => {
    const newProject: Project = {
      id: projects.length + 1,
      title,
      description,
    };
    setProjects([...projects, newProject]);
  };

  const deleteProject = (id: number) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">Task Buddy</div>
        <nav className="menu">
          <ul>
            <li>Dashboard</li>
            <li>Dashboard</li>
            <li>Dashboard</li>
            <li>Dashboard</li>
            <li>Calendar</li>
            <li>Dashboard</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h2 className="board-title">BOARD</h2>
          <div className="search-profile">
            <input type="text" placeholder="Hinted search text" />
            <div className="profile">
              <div className="profile-icon">★</div>
              <div>
                <p>Name</p>
                <p>Email</p>
              </div>
            </div>
          </div>
        </header>

        <section className="upper-section">
          <div className="board">
            <h3>Calendar</h3>
            <p>Use calendar for easy</p>
          </div>
          <div className="board">
            <h3>Calendar</h3>
            <p>Use calendar for easy</p>
          </div>
          <div className="card create-card" onClick={() => setModalOpen(true)}>
            <h3>CREATE</h3>
            <div className="plus-icon">+</div>
          </div>
        </section>

        <section className="lower-section">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.id} className="project-card">
                <button className="delete-button" onClick={() => deleteProject(project.id)}>×</button>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            ))
          ) : (
            <p>No projects created yet.</p>
          )}
        </section>
      </main>

      {/* Modal for creating a new project */}
      <Modal 
        show={isModalOpen} 
        onClose={() => setModalOpen(false)} 
        onSubmit={createNewProject} 
      />
    </div>
  );
};

export default Dashboard;
