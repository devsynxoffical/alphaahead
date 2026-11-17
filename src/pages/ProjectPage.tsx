import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectPage: React.FC = () => {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1200);

  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;
  const isLargeScreen = screenWidth >= 1440;
  const paddingSection = isMobile ? '2rem 1rem' : isTablet ? '3rem 2rem' : isLargeScreen ? '5rem 3rem' : '4rem 2rem';
  const headingFontSize = isMobile ? '1.5rem' : isTablet ? '2rem' : isLargeScreen ? '3rem' : '2.5rem';

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects = [
    {
      name: 'Zingo Assist',
      category: 'Virtual Assistant Services',
      image: '/portfolio/zingo-assist.png',
      description:
        'Professional virtual assistant services that help businesses scale by streamlining administrative and operational tasks. Our trained remote teams specialize in real estate, finance, and customer support.',
      services: ['Virtual Assistant', 'Customer Support', 'Administrative Tasks', 'Business Process Outsourcing'],
      website: 'https://www.zingoassist.us/',
    },
    {
      name: 'Alpha Medi Assist',
      category: 'Healthcare Solutions',
      image: '/newalphamediassist.png',
      description:
        'A comprehensive healthcare solutions platform designed to simplify operations, enhance patient care, and improve service delivery for healthcare providers.',
      services: ['Healthcare Platform', 'Patient Care', 'Medical Operations', 'Healthcare Technology'],
      website: 'https://alphamediassist.com/',
    },
    {
      name: 'Learn with Alpha',
      category: 'E-Learning Platform',
      image: '/portfolio/learn-with-alpha.png',
      description:
        'A modern e-learning platform offering interactive and dynamic digital learning experiences. The platform supports both students and professionals with flexible, personalized learning paths.',
      services: ['E-Learning Platform', 'Skill Development', 'Online Courses', 'Educational Technology'],
      website: 'https://learnwithalpha.com/',
    },
    {
      name: 'Alpha Ahead Real Estate Brokerage',
      category: 'Real Estate Solutions',
      image: '/portfolio/alpha-ahead-real-estate.png',
      description:
        'Digital real estate solutions connecting buyers and sellers with seamless property solutions in Dubai and beyond. We specialize in sales, leasing, and investment opportunities.',
      services: ['Real Estate', 'Property Management', 'Investment Advisory', 'Digital Solutions'],
      website: 'https://alphaahead.estate/',
    },
  ];

  const openWebsite = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <section style={{ background: '#DC520E', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ fontSize: headingFontSize, fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            Projects by ALPHA AHEAD
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#fff', maxWidth: 800, margin: '0 auto', opacity: 0.95 }}>
            At Alpha Ahead LLC, we take pride in delivering innovative projects that transform industries and drive measurable growth. Below are some of our flagship ventures.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: paddingSection }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
              gap: '2rem',
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '200px',
                    background: `url(${project.image}) center/contain no-repeat`,
                    backgroundColor: '#f8f9fa',
                    backgroundSize: 'contain',
                    borderBottom: '1px solid #f0f0f0',
                  }}
                />
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: '#333',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    style={{
                      color: '#DC520E',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '1rem',
                    }}
                  >
                    {project.category}
                  </p>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      color: '#666',
                      marginBottom: '1rem',
                      flex: 1,
                    }}
                  >
                    {project.description}
                  </p>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: '#333',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Highlights:
                    </h4>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                      }}
                    >
                      {project.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          style={{
                            background: '#f0f0f0',
                            color: '#666',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                          }}
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', flexDirection: isMobile ? 'column' : 'row', marginTop: 'auto' }}>
                    <button
                      type="button"
                      onClick={() => openWebsite(project.website)}
                      style={{
                        background: '#DC520E',
                        color: '#fff',
                        padding: '0.75rem 1.5rem',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'background 0.3s ease',
                        flex: 1,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#b8440b';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#DC520E';
                      }}
                    >
                      Visit Website
                    </button>
                    <button
                      type="button"
                      onClick={() => openWebsite(project.website)}
                      style={{
                        background: 'transparent',
                        color: '#DC520E',
                        padding: '0.75rem 1.5rem',
                        border: '2px solid #DC520E',
                        borderRadius: '6px',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        flex: 1,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#DC520E';
                        e.currentTarget.style.color = '#fff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#DC520E';
                      }}
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#333', marginBottom: '1rem' }}>
            Do you have a Product or Business idea?
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#666', marginBottom: '2rem' }}>
            Email us at:{' '}
            <a href="mailto:contact@alphaaheadllc.com" style={{ color: '#DC520E', textDecoration: 'none', fontWeight: 600 }}>
              contact@alphaaheadllc.com
            </a>
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#666', marginBottom: '2rem' }}>
            If you have a vision for your business or a project idea, we&apos;d love to discuss it with you. Let us help you turn your ideas into reality by leveraging innovative solutions that drive growth and efficiency.
          </p>
          <button
            type="button"
            onClick={() => navigate('/contact')}
            style={{
              background: '#DC520E',
              color: '#fff',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#b8440b';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#DC520E';
            }}
          >
            Let&apos;s Talk
          </button>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
