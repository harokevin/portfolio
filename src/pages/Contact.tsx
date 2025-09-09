import React, { useState } from 'react';
import styled from 'styled-components';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { Container, Section, Card, Button, Heading, Text, theme } from '../styles/components';
import { personalInfo, contactLinks } from '../data/portfolio';

const ContactSection = styled(Section)`
  padding-top: calc(70px + ${theme.spacing.xl});
  background: ${theme.colors.background};
  min-height: 100vh;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(Card)`
  background: ${theme.colors.surface};
`;

const ContactInfo = styled(Card)`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, #1e40af 100%);
  color: white;
`;

const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.md};
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${theme.spacing.xs};
  font-weight: 500;
  color: ${theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.sm};
  border: 1px solid ${theme.colors.border};
  border-radius: 6px;
  font-size: ${theme.typography.body};
  transition: border-color 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${theme.spacing.sm};
  border: 1px solid ${theme.colors.border};
  border-radius: 6px;
  font-size: ${theme.typography.body};
  transition: border-color 0.3s ease;
  box-sizing: border-box;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  color: rgba(255, 255, 255, 0.9);
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-weight: 600;
  margin-bottom: ${theme.spacing.xs};
`;

const ContactValue = styled.div`
  color: rgba(255, 255, 255, 0.8);
`;

const SocialLinks = styled.div`
  margin-top: ${theme.spacing.xl};
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm};
  background: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const FormMessage = styled.div<{ type: 'success' | 'error' }>`
  padding: ${theme.spacing.sm};
  border-radius: 6px;
  margin-bottom: ${theme.spacing.md};
  background: ${props => props.type === 'success' ? '#d1fae5' : '#fee2e2'};
  color: ${props => props.type === 'success' ? '#065f46' : '#991b1b'};
  border: 1px solid ${props => props.type === 'success' ? '#a7f3d0' : '#fecaca'};
`;

const getIcon = (iconName: string, size: number = 20) => {
  switch (iconName) {
    case 'Github':
      return <Github size={size} />;
    case 'Linkedin':
      return <Linkedin size={size} />;
    case 'Twitter':
      return <Twitter size={size} />;
    case 'Mail':
      return <Mail size={size} />;
    default:
      return <ExternalLink size={size} />;
  }
};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Thank you for your message! I\'ll get back to you soon.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <ContactSection>
      <Container>
        <Heading size="h1" center>
          Get In Touch
        </Heading>
        <Text center color={theme.colors.textLight} size="body">
          I'm always interested in hearing about new opportunities and exciting projects. 
          Let's connect and discuss how we can work together.
        </Text>
        
        <ContactGrid>
          <ContactForm>
            <Heading size="h3">Send Me a Message</Heading>
            
            {submitMessage && (
              <FormMessage type={submitMessage.type}>
                {submitMessage.text}
              </FormMessage>
            )}
            
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Message *</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>
              
              <Button type="submit" disabled={isSubmitting} style={{ width: '100%' }}>
                <Send size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </ContactForm>
          
          <ContactInfo>
            <Heading size="h3" color="white">
              Contact Information
            </Heading>
            <Text color="rgba(255, 255, 255, 0.8)" style={{ marginBottom: theme.spacing.xl }}>
              Feel free to reach out through any of the following channels:
            </Text>
            
            <ContactItem>
              <ContactIcon>
                <Mail size={24} />
              </ContactIcon>
              <ContactDetails>
                <ContactLabel>Email</ContactLabel>
                <ContactValue>{personalInfo.email}</ContactValue>
              </ContactDetails>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <Phone size={24} />
              </ContactIcon>
              <ContactDetails>
                <ContactLabel>Phone</ContactLabel>
                <ContactValue>{personalInfo.phone}</ContactValue>
              </ContactDetails>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>
                <MapPin size={24} />
              </ContactIcon>
              <ContactDetails>
                <ContactLabel>Location</ContactLabel>
                <ContactValue>{personalInfo.location}</ContactValue>
              </ContactDetails>
            </ContactItem>
            
            <SocialLinks>
              <Heading size="h4" color="white">
                Connect With Me
              </Heading>
              <SocialGrid>
                {contactLinks.map((link) => (
                  <SocialLink
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getIcon(link.icon, 20)}
                    {link.name}
                  </SocialLink>
                ))}
              </SocialGrid>
            </SocialLinks>
          </ContactInfo>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact;