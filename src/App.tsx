import './App.css'

function App() {
  const projects = [
    {
      title: "Enterprise Web Applications",
      description: "Scalable cloud-native applications for enterprise clients using React, TypeScript, and .NET Core deployed via Azure DevOps",
      technologies: ["React", "TypeScript", ".NET Core", "C#", "Azure DevOps", "Azure Functions"],
      company: "Lantern Studios",
      period: "2020-2025"
    },
    {
      title: "Global Fulfillment Platform",
      description: "Cloud-native microservices supporting global product fulfillment workflows across multiple warehouse systems",
      technologies: ["Node.js", "GraphQL", "AWS Lambda", "DynamoDB", "Terraform"],
      company: "Nike",
      period: "2019-2020"
    },
    {
      title: "Asset Tracking Platform",
      description: "Internal platform with real-time updates and intuitive UI for tracking assets across warehouse operations",
      technologies: ["React", "AWS Amplify", "GraphQL", "Real-time APIs"],
      company: "Nike",
      period: "2019-2020"
    },
    {
      title: "Nuclear Waste Cleanup Simulation",
      description: "Enhanced simulation system for nuclear waste cleanup with improved data models and user workflows",
      technologies: ["Data Modeling", "SQL", "Systems Integration"],
      company: "Washington River Protection Solutions",
      period: "2016-2017"
    }
  ]

  const skills = [
    "JavaScript/TypeScript", "React", "Node.js", "C#", ".NET Core",
    "GraphQL", "REST APIs", "AWS", "Azure", "SQL", "PostgreSQL", 
    "DynamoDB", "Terraform", "CI/CD", "Microservices", "Cloud Architecture"
  ]

  const experience = [
    {
      title: "Full Stack Software Engineer",
      company: "Lantern Studios",
      period: "Oct 2020 – July 2025",
      location: "Portland, OR"
    },
    {
      title: "Software Engineer Contractor", 
      company: "Nike (via Apex Systems)",
      period: "June 2019 – Oct 2020",
      location: "Portland, OR"
    },
    {
      title: "Full Stack Developer",
      company: "Wildland Labs", 
      period: "Oct 2016 – June 2019",
      location: "Richland, WA"
    }
  ]

  return (
    <div className="portfolio">
      <header className="hero">
        <div className="hero-content">
          <h1>Kevin Haro</h1>
          <h2>Senior Full-Stack Software Engineer</h2>
          <p>10+ years of experience building scalable cloud-native applications. Passionate about clean code, mentoring, and delivering business value through technology.</p>
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
            I'm a senior full-stack engineer with 10+ years of experience building scalable cloud-native applications. 
            Proficient in JavaScript/TypeScript, C#, and AWS/Azure. I have a proven track record of designing and 
            developing enterprise web applications, implementing CI/CD pipelines, and mentoring junior developers. 
            I frequently collaborate with stakeholders, PMs, and QA teams to align software delivery with business goals.
          </p>
        </div>
      </section>

      <section id="experience" className="experience">
        <div className="container">
          <h2>Professional Experience</h2>
          <div className="experience-timeline">
            {experience.map((job, index) => (
              <div key={index} className="experience-item">
                <h3>{job.title}</h3>
                <h4>{job.company}</h4>
                <div className="experience-meta">
                  <span className="period">{job.period}</span>
                  <span className="location">{job.location}</span>
                </div>
              </div>
            ))}
          </div>
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
          <h2>Featured Projects & Experience</h2>
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
                <div className="project-meta">
                  <span className="company">{project.company}</span>
                  <span className="period">{project.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="education">
        <div className="container">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Bachelor of Science in Computer Science</h3>
            <h4>Central Washington University – Ellensburg, WA</h4>
            <span className="graduation-year">2016</span>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>Let's connect and discuss opportunities</p>
          <div className="contact-links">
            <a href="mailto:harokevin0@gmail.com">Email</a>
            <a href="https://linkedin.com/in/harokevin" target="_blank" rel="noopener noreferrer">
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
