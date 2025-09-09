import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Container, Section, Button, Heading, Text, FlexContainer, theme } from '../styles/components';
import { personalInfo, contactLinks } from '../data/portfolio';

const HeroSection = styled(Section)`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, #1e40af 100%);
  color: white;
  text-align: center;
  padding: ${theme.spacing.xxl} 0 ${theme.spacing.xl} 0;
  margin-top: 70px;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  margin: 0 auto ${theme.spacing.lg} auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  border: 4px solid rgba(255, 255, 255, 0.2);
`;

const HeroButtons = styled(FlexContainer)`
  justify-content: center;
  margin-top: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
  }
`;

const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const SocialLinks = styled(FlexContainer)`
  justify-content: center;
  margin-top: ${theme.spacing.lg};
`;

const FeaturesSection = styled(Section)`
  background: ${theme.colors.background};
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
`;

const FeatureCard = styled.div`
  background: ${theme.colors.surface};
  padding: ${theme.spacing.lg};
  border-radius: 8px;
  text-align: center;
  box-shadow: ${theme.shadows.sm};
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: ${theme.shadows.md};
    transform: translateY(-4px);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.spacing.md} auto;
  color: white;
`;

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Github':
      return <Github size={24} />;
    case 'Linkedin':
      return <Linkedin size={24} />;
    case 'Mail':
      return <Mail size={24} />;
    default:
      return <Mail size={24} />;
  }
};

const Home: React.FC = () => {
  return (
    <>
      <HeroSection>
        <Container>
          <HeroContent>
            <ProfileImage>
              👋
            </ProfileImage>
            <Heading size="h1" color="white" center>
              Hi, I'm {personalInfo.name}
            </Heading>
            <Heading size="h3" color="rgba(255, 255, 255, 0.9)" center>
              {personalInfo.title}
            </Heading>
            <Text color="rgba(255, 255, 255, 0.8)" center size="body">
              {personalInfo.bio}
            </Text>
            
            <HeroButtons gap={theme.spacing.md}>
              <Button as={Link} to="/projects">
                View My Work <ArrowRight size={20} />
              </Button>
              <Button variant="outline" as={Link} to="/resume">
                <Download size={20} /> Download Resume
              </Button>
            </HeroButtons>
            
            <SocialLinks gap={theme.spacing.md}>
              {contactLinks.map((link) => (
                <SocialButton
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                >
                  {getIcon(link.icon)}
                </SocialButton>
              ))}
            </SocialLinks>
          </HeroContent>
        </Container>
      </HeroSection>

      <FeaturesSection>
        <Container>
          <Heading size="h2" center>
            What I Do
          </Heading>
          <Text center color={theme.colors.textLight}>
            I specialize in building modern web applications with cutting-edge technologies
          </Text>
          
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>🚀</FeatureIcon>
              <Heading size="h4">Frontend Development</Heading>
              <Text color={theme.colors.textLight}>
                Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS
              </Text>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>⚙️</FeatureIcon>
              <Heading size="h4">Backend Development</Heading>
              <Text color={theme.colors.textLight}>
                Building robust APIs and server-side applications with Node.js, Express, and databases
              </Text>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>☁️</FeatureIcon>
              <Heading size="h4">Cloud & DevOps</Heading>
              <Text color={theme.colors.textLight}>
                Deploying and maintaining applications on cloud platforms with CI/CD pipelines
              </Text>
            </FeatureCard>
          </FeatureGrid>
        </Container>
      </FeaturesSection>
    </>
  );
};

export default Home;