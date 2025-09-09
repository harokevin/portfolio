import React from 'react';
import styled from 'styled-components';
import { Download, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Container, Section, Card, Button, Heading, Text, FlexContainer, Tag, theme } from '../styles/components';
import { experience, education, skills, personalInfo } from '../data/portfolio';

const ResumeSection = styled(Section)`
  padding-top: calc(70px + ${theme.spacing.xl});
  background: ${theme.colors.background};
  min-height: 100vh;
`;

const ResumeHeader = styled(Card)`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, #1e40af 100%);
  color: white;
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`;

const ContactInfo = styled(FlexContainer)`
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${theme.spacing.md};
  gap: ${theme.spacing.lg};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  color: rgba(255, 255, 255, 0.9);
`;

const ResumeGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceCard = styled(Card)`
  margin-bottom: ${theme.spacing.lg};
`;

const ExperienceHeader = styled(FlexContainer)`
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.sm};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${theme.spacing.xs};
  }
`;

const CompanyInfo = styled.div`
  flex: 1;
`;

const Duration = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  color: ${theme.colors.textLight};
  font-weight: 500;
  white-space: nowrap;
`;

const ResponsibilityList = styled.ul`
  margin: ${theme.spacing.md} 0;
  padding-left: ${theme.spacing.lg};
  
  li {
    margin-bottom: ${theme.spacing.xs};
    line-height: 1.6;
    color: ${theme.colors.textLight};
  }
`;

const TechTags = styled(FlexContainer)`
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-top: ${theme.spacing.sm};
`;

const SkillCategory = styled(Card)`
  margin-bottom: ${theme.spacing.md};
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${theme.spacing.xs};
  margin-top: ${theme.spacing.sm};
`;

const SkillItem = styled.div`
  background: ${theme.colors.background};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: 4px;
  text-align: center;
  font-size: ${theme.typography.small};
  font-weight: 500;
  color: ${theme.colors.text};
`;

const EducationCard = styled(Card)`
  margin-bottom: ${theme.spacing.md};
`;

const DownloadButton = styled(Button)`
  position: fixed;
  bottom: ${theme.spacing.lg};
  right: ${theme.spacing.lg};
  border-radius: 50px;
  padding: ${theme.spacing.md};
  box-shadow: ${theme.shadows.lg};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    position: static;
    width: 100%;
    margin-top: ${theme.spacing.lg};
  }
`;

const Resume: React.FC = () => {
  const handleDownload = () => {
    // In a real application, this would download an actual PDF resume
    alert('Resume download functionality would be implemented here with a real PDF file.');
  };

  return (
    <ResumeSection>
      <Container>
        <ResumeHeader>
          <Heading size="h1" color="white" center>
            {personalInfo.name}
          </Heading>
          <Heading size="h3" color="rgba(255, 255, 255, 0.9)" center>
            {personalInfo.title}
          </Heading>
          
          <ContactInfo>
            <ContactItem>
              <Mail size={16} />
              {personalInfo.email}
            </ContactItem>
            <ContactItem>
              <Phone size={16} />
              {personalInfo.phone}
            </ContactItem>
            <ContactItem>
              <MapPin size={16} />
              {personalInfo.location}
            </ContactItem>
          </ContactInfo>
        </ResumeHeader>
        
        <ResumeGrid>
          <div>
            <Heading size="h2">Professional Experience</Heading>
            {experience.map((job) => (
              <ExperienceCard key={job.id}>
                <ExperienceHeader>
                  <CompanyInfo>
                    <Heading size="h3">{job.position}</Heading>
                    <Text color={theme.colors.primary} size="body" style={{ margin: 0, fontWeight: '600' }}>
                      {job.company}
                    </Text>
                  </CompanyInfo>
                  <Duration>
                    <Calendar size={16} />
                    {job.duration}
                  </Duration>
                </ExperienceHeader>
                
                <ResponsibilityList>
                  {job.description.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ResponsibilityList>
                
                <TechTags>
                  {job.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </TechTags>
              </ExperienceCard>
            ))}
            
            <Heading size="h2" style={{ marginTop: theme.spacing.xl }}>Education</Heading>
            {education.map((edu) => (
              <EducationCard key={edu.id}>
                <ExperienceHeader>
                  <CompanyInfo>
                    <Heading size="h3">{edu.degree}</Heading>
                    <Text color={theme.colors.primary} size="body" style={{ margin: 0, fontWeight: '600' }}>
                      {edu.institution}
                    </Text>
                  </CompanyInfo>
                  <Duration>
                    <Calendar size={16} />
                    {edu.duration}
                  </Duration>
                </ExperienceHeader>
                {edu.gpa && (
                  <Text color={theme.colors.textLight}>
                    GPA: {edu.gpa}/4.0
                  </Text>
                )}
              </EducationCard>
            ))}
          </div>
          
          <div>
            <Heading size="h2">Technical Skills</Heading>
            {skills.map((skillCategory) => (
              <SkillCategory key={skillCategory.category}>
                <Heading size="h4">{skillCategory.category}</Heading>
                <SkillGrid>
                  {skillCategory.items.map((skill) => (
                    <SkillItem key={skill}>{skill}</SkillItem>
                  ))}
                </SkillGrid>
              </SkillCategory>
            ))}
            
            <Card style={{ marginTop: theme.spacing.lg }}>
              <Heading size="h4">Summary</Heading>
              <Text color={theme.colors.textLight} size="small">
                {personalInfo.bio}
              </Text>
            </Card>
          </div>
        </ResumeGrid>
        
        <div className="download-mobile" style={{ display: 'none' }}>
          <style>{`
            @media (max-width: ${theme.breakpoints.sm}) {
              .download-mobile { display: block !important; }
            }
          `}</style>
          <DownloadButton onClick={handleDownload}>
            <Download size={20} /> Download PDF Resume
          </DownloadButton>
        </div>
      </Container>
      
      <DownloadButton onClick={handleDownload}>
        <Download size={20} /> Download PDF
      </DownloadButton>
    </ResumeSection>
  );
};

export default Resume;