import React from 'react';
import styled from 'styled-components';
import { Github, ExternalLink } from 'lucide-react';
import { Container, Section, Card, Button, Heading, Text, Grid, FlexContainer, Tag, theme } from '../styles/components';
import { projects } from '../data/portfolio';

const ProjectsSection = styled(Section)`
  padding-top: calc(70px + ${theme.spacing.xl});
  background: ${theme.colors.background};
  min-height: 100vh;
`;

const ProjectCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, #1e40af 100%);
  border-radius: 6px;
  margin-bottom: ${theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  
  &:hover::before {
    transform: translateX(100%);
  }
`;

const ProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled(Heading)`
  margin-bottom: ${theme.spacing.sm};
`;

const ProjectDescription = styled(Text)`
  flex: 1;
  margin-bottom: ${theme.spacing.md};
`;

const TechTags = styled(FlexContainer)`
  flex-wrap: wrap;
  margin-bottom: ${theme.spacing.md};
  gap: ${theme.spacing.xs};
`;

const ProjectButtons = styled(FlexContainer)`
  gap: ${theme.spacing.sm};
  margin-top: auto;
`;

const ProjectStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const StatCard = styled(Card)`
  text-align: center;
  background: ${theme.colors.surface};
`;

const StatNumber = styled.div`
  font-size: ${theme.typography.h2};
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.xs};
`;

const StatLabel = styled(Text)`
  margin: 0;
  font-weight: 500;
`;

const getProjectIcon = (index: number) => {
  const icons = ['💻', '📱', '🌐', '⚡', '🎨', '🔧'];
  return icons[index % icons.length];
};

const Projects: React.FC = () => {
  return (
    <ProjectsSection>
      <Container>
        <Heading size="h1" center>
          My Projects
        </Heading>
        <Text center color={theme.colors.textLight} size="body">
          Here are some of the projects I've worked on. Each project showcases different aspects of my development skills.
        </Text>
        
        <ProjectStats>
          <StatCard>
            <StatNumber>{projects.length}+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>10+</StatNumber>
            <StatLabel>Technologies Used</StatLabel>
          </StatCard>
          <StatCard>
            <StatNumber>50+</StatNumber>
            <StatLabel>GitHub Commits</StatLabel>
          </StatCard>
        </ProjectStats>
        
        <Grid columns={3} gap={theme.spacing.lg}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id}>
              <ProjectImage>
                {getProjectIcon(index)}
              </ProjectImage>
              
              <ProjectContent>
                <ProjectTitle size="h3">
                  {project.title}
                </ProjectTitle>
                
                <ProjectDescription color={theme.colors.textLight}>
                  {project.description}
                </ProjectDescription>
                
                <TechTags>
                  {project.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </TechTags>
                
                <ProjectButtons>
                  {project.githubUrl && (
                    <Button
                      as="a"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                    >
                      <Github size={18} /> Code
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      as="a"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </Button>
                  )}
                </ProjectButtons>
              </ProjectContent>
            </ProjectCard>
          ))}
        </Grid>
        
        <FlexContainer justify="center" style={{ marginTop: theme.spacing.xl }}>
          <Button
            as="a"
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            <Github size={20} /> View All Projects on GitHub
          </Button>
        </FlexContainer>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;