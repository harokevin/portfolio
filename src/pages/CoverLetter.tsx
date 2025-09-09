import React from 'react';
import styled from 'styled-components';
import { Download, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { Container, Section, Card, Button, Heading, Text, FlexContainer, theme } from '../styles/components';
import { personalInfo } from '../data/portfolio';

const CoverLetterSection = styled(Section)`
  padding-top: calc(70px + ${theme.spacing.xl});
  background: ${theme.colors.background};
  min-height: 100vh;
`;

const LetterContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const LetterHeader = styled(Card)`
  background: ${theme.colors.surface};
  margin-bottom: ${theme.spacing.lg};
  text-align: center;
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
  color: ${theme.colors.textLight};
`;

const LetterBody = styled(Card)`
  background: ${theme.colors.surface};
  line-height: 1.8;
  font-size: ${theme.typography.body};
`;

const LetterDate = styled.div`
  text-align: right;
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.textLight};
`;

const Signature = styled.div`
  margin-top: ${theme.spacing.xl};
  text-align: left;
`;

const SignatureLine = styled.div`
  margin-top: ${theme.spacing.lg};
  padding-top: ${theme.spacing.sm};
  border-top: 1px solid ${theme.colors.border};
  font-weight: 600;
  color: ${theme.colors.text};
`;

const Paragraph = styled.p`
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.text};
  text-align: justify;
  
  &:first-of-type {
    margin-top: ${theme.spacing.lg};
  }
`;

const DownloadButton = styled(Button)`
  margin-top: ${theme.spacing.lg};
  width: 100%;
`;

const CoverLetter: React.FC = () => {
  const handleDownload = () => {
    // In a real application, this would download an actual PDF cover letter
    alert('Cover letter download functionality would be implemented here with a real PDF file.');
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <CoverLetterSection>
      <Container>
        <LetterContainer>
          <Heading size="h1" center>
            Cover Letter
          </Heading>
          <Text center color={theme.colors.textLight} size="body">
            A personalized introduction to my professional background and motivation
          </Text>
          
          <LetterHeader>
            <Heading size="h2" color={theme.colors.text}>
              {personalInfo.name}
            </Heading>
            <Text color={theme.colors.primary} size="body" style={{ margin: 0, fontWeight: '600' }}>
              {personalInfo.title}
            </Text>
            
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
          </LetterHeader>
          
          <LetterBody>
            <LetterDate>
              <Calendar size={16} style={{ display: 'inline', marginRight: '8px' }} />
              {currentDate}
            </LetterDate>
            
            <div>
              <strong>Dear Hiring Manager,</strong>
            </div>
            
            <Paragraph>
              I am writing to express my strong interest in joining your development team as a Full Stack Developer. 
              With my passion for creating innovative web applications and my experience in modern technologies, 
              I am excited about the opportunity to contribute to your organization's success.
            </Paragraph>
            
            <Paragraph>
              Throughout my career, I have developed a comprehensive skill set in both frontend and backend 
              technologies. My expertise includes React, TypeScript, Node.js, and various databases, allowing me 
              to build complete, scalable web applications from conception to deployment. I have successfully 
              delivered multiple projects that have improved user experience and business outcomes.
            </Paragraph>
            
            <Paragraph>
              What sets me apart is my commitment to writing clean, maintainable code and my collaborative 
              approach to problem-solving. I thrive in team environments where I can both contribute my 
              technical expertise and learn from other talented developers. My experience with agile 
              methodologies and modern development practices ensures that I can integrate seamlessly into 
              your existing workflows.
            </Paragraph>
            
            <Paragraph>
              I am particularly drawn to your company because of its reputation for innovation and commitment 
              to excellence. Your projects align perfectly with my interests in creating user-centric 
              applications that solve real-world problems. I am eager to bring my technical skills, creative 
              thinking, and dedication to quality to your team.
            </Paragraph>
            
            <Paragraph>
              In my previous roles, I have:
            </Paragraph>
            
            <ul style={{ marginLeft: theme.spacing.lg, marginBottom: theme.spacing.md }}>
              <li style={{ marginBottom: theme.spacing.xs, color: theme.colors.text }}>
                Developed and maintained multiple full-stack web applications using React and Node.js
              </li>
              <li style={{ marginBottom: theme.spacing.xs, color: theme.colors.text }}>
                Collaborated with cross-functional teams to deliver projects on time and within budget
              </li>
              <li style={{ marginBottom: theme.spacing.xs, color: theme.colors.text }}>
                Implemented automated testing and CI/CD pipelines to improve code quality and deployment efficiency
              </li>
              <li style={{ marginBottom: theme.spacing.xs, color: theme.colors.text }}>
                Mentored junior developers and contributed to technical documentation and best practices
              </li>
            </ul>
            
            <Paragraph>
              I am excited about the possibility of discussing how my skills and experience can contribute 
              to your team's continued success. I have attached my resume for your review and would welcome 
              the opportunity to discuss my qualifications in more detail during an interview.
            </Paragraph>
            
            <Paragraph>
              Thank you for considering my application. I look forward to hearing from you soon.
            </Paragraph>
            
            <Signature>
              <div>Sincerely,</div>
              <SignatureLine>{personalInfo.name}</SignatureLine>
            </Signature>
          </LetterBody>
          
          <FlexContainer justify="center">
            <DownloadButton onClick={handleDownload}>
              <Download size={20} /> Download Cover Letter PDF
            </DownloadButton>
          </FlexContainer>
        </LetterContainer>
      </Container>
    </CoverLetterSection>
  );
};

export default CoverLetter;