import styled from 'styled-components';

export const theme = {
  colors: {
    primary: '#2563eb',
    secondary: '#64748b',
    accent: '#f59e0b',
    background: '#f8fafc',
    surface: '#ffffff',
    text: '#1e293b',
    textLight: '#64748b',
    border: '#e2e8f0',
    success: '#10b981',
    error: '#ef4444'
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem'
  },
  typography: {
    h1: '2.5rem',
    h2: '2rem',
    h3: '1.5rem',
    h4: '1.25rem',
    body: '1rem',
    small: '0.875rem'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
  }
};

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing.md};
  
  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0 ${theme.spacing.sm};
  }
`;

export const Section = styled.section`
  padding: ${theme.spacing.xxl} 0;
  
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

export const Card = styled.div`
  background: ${theme.colors.surface};
  border-radius: 8px;
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.md};
  border: 1px solid ${theme.colors.border};
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: ${theme.shadows.lg};
    transform: translateY(-2px);
  }
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'outline' }>`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid transparent;
  
  ${props => {
    switch (props.variant) {
      case 'secondary':
        return `
          background: ${theme.colors.secondary};
          color: white;
          &:hover {
            background: ${theme.colors.textLight};
          }
        `;
      case 'outline':
        return `
          background: transparent;
          color: ${theme.colors.primary};
          border-color: ${theme.colors.primary};
          &:hover {
            background: ${theme.colors.primary};
            color: white;
          }
        `;
      default:
        return `
          background: ${theme.colors.primary};
          color: white;
          &:hover {
            background: #1d4ed8;
          }
        `;
    }
  }}
`;

export const Grid = styled.div<{ columns?: number; gap?: string }>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 1}, 1fr);
  gap: ${props => props.gap || theme.spacing.lg};
  
  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const FlexContainer = styled.div<{ direction?: 'row' | 'column'; gap?: string; align?: string; justify?: string }>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  gap: ${props => props.gap || theme.spacing.md};
  align-items: ${props => props.align || 'flex-start'};
  justify-content: ${props => props.justify || 'flex-start'};
  
  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Heading = styled.h1<{ size?: 'h1' | 'h2' | 'h3' | 'h4'; color?: string; center?: boolean }>`
  font-size: ${props => theme.typography[props.size || 'h1']};
  color: ${props => props.color || theme.colors.text};
  text-align: ${props => props.center ? 'center' : 'left'};
  margin-bottom: ${theme.spacing.md};
  font-weight: 700;
  line-height: 1.2;
`;

export const Text = styled.p<{ size?: 'body' | 'small'; color?: string; center?: boolean }>`
  font-size: ${props => theme.typography[props.size || 'body']};
  color: ${props => props.color || theme.colors.textLight};
  text-align: ${props => props.center ? 'center' : 'left'};
  line-height: 1.6;
  margin-bottom: ${theme.spacing.sm};
`;

export const Tag = styled.span`
  background: ${theme.colors.primary};
  color: white;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: 4px;
  font-size: ${theme.typography.small};
  font-weight: 500;
  display: inline-block;
`;