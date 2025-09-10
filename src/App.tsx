import './App.css'

function App() {
  const projects = [
    {
      title: "Project One",
      description: "A modern web application built with React and TypeScript",
      technologies: ["React", "TypeScript", "Node.js"],
      github: "https://github.com/harokevin/project-one",
      demo: "https://project-one-demo.com"
    },
    {
      title: "Project Two", 
      description: "Full-stack application with REST API and database integration",
      technologies: ["Python", "FastAPI", "PostgreSQL"],
      github: "https://github.com/harokevin/project-two",
      demo: "https://project-two-demo.com"
    }
  ]

  const skills = [
    "JavaScript/TypeScript", "React", "Node.js", "Python", 
    "SQL", "Git", "AWS", "Docker", "REST APIs"
  ]

  return (
    <div className="portfolio">
      <header className="hero">
        <div className="hero-content">
          <h1>Kevin Haro</h1>
          <h2>Software Engineer</h2>
          <p>Building modern, scalable web applications with clean code and user-focused design</p>
          <div className="hero-links">
            <a href="#about" className="btn-primary">About Me</a>
            <a href="#projects" className="btn-secondary">View Projects</a>
          </div>
        </div>
      </header>

      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I'm a passionate software engineer with experience in full-stack development. 
            I enjoy solving complex problems and creating efficient, maintainable solutions.
            My goal is to build software that makes a positive impact on users' lives.
          </p>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2>Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-tag">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>Let's connect and discuss opportunities</p>
          <div className="contact-links">
            <a href="mailto:kevin@example.com">Email</a>
            <a href="https://linkedin.com/in/kevinHaro" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/harokevin" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 Kevin Haro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
