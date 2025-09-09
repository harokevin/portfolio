import { Project, Experience, Education, Skill, ContactLink } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, and payment integration.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe API'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://your-ecommerce-demo.com',
    imageUrl: '/images/ecommerce-project.png'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A responsive task management application with drag-and-drop functionality, real-time updates, and team collaboration features.',
    technologies: ['React', 'Redux', 'Firebase', 'Material-UI'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://your-task-manager.com',
    imageUrl: '/images/task-manager.png'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A weather dashboard application that displays current weather conditions and forecasts for multiple cities with interactive charts and maps.',
    technologies: ['React', 'Chart.js', 'Weather API', 'Styled Components'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://your-weather-dashboard.com',
    imageUrl: '/images/weather-dashboard.png'
  }
];

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Tech Company Inc.',
    position: 'Full Stack Developer',
    duration: '2022 - Present',
    description: [
      'Developed and maintained web applications using React, Node.js, and PostgreSQL',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Implemented automated testing and CI/CD pipelines to improve code quality',
      'Mentored junior developers and contributed to technical documentation'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
  },
  {
    id: '2',
    company: 'Startup Solutions',
    position: 'Frontend Developer',
    duration: '2021 - 2022',
    description: [
      'Built responsive web applications using React and TypeScript',
      'Worked closely with designers to implement pixel-perfect UI components',
      'Optimized application performance and improved user experience',
      'Participated in code reviews and agile development processes'
    ],
    technologies: ['React', 'TypeScript', 'CSS3', 'Redux', 'Jest']
  }
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'University of Technology',
    degree: 'Bachelor of Science in Computer Science',
    duration: '2018 - 2022',
    gpa: '3.8'
  }
];

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Next.js']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL']
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'Docker', 'AWS', 'Firebase', 'Jest', 'Webpack', 'VS Code']
  }
];

export const contactLinks: ContactLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'Github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile',
    icon: 'Linkedin'
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'Mail'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'Twitter'
  }
];

export const personalInfo = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  bio: 'Passionate full-stack developer with experience in building scalable web applications. I love creating clean, efficient code and solving complex problems with innovative solutions.',
  location: 'Your City, Country',
  phone: '+1 (555) 123-4567',
  email: 'your.email@example.com'
};