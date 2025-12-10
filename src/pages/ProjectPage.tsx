import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectPage: React.FC = () => {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;
  const headingFont = isMobile ? '1.5rem' : isTablet ? '2rem' : '2.5rem';
  const goToContact = () => navigate('/contact');

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Projects Header */}
      <section style={{ background: '#DC520E', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ fontSize: headingFont, fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            Projects by ALPHA AHEAD
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#fff', maxWidth: 800, margin: '0 auto', opacity: 0.95 }}>
            At Alpha Ahead LLC, we take pride in delivering innovative projects that transform industries and drive measurable growth. Below are some of our flagship ventures.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ background: '#f9f9f9', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          
          {/* Zingo Assist */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '3rem',
            marginBottom: '4rem',
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
          }}>
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '100%',
                maxWidth: isMobile ? '100%' : isTablet ? '450px' : '500px',
                height: isMobile ? '250px' : isTablet ? '350px' : '400px',
                background: 'url("/Project/Project7.png") center/cover',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
              }}>
              </div>
            </div>
            <div style={{ flex: '1 1 500px', maxWidth: 600 }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#333',
                marginBottom: '1.5rem'
              }}>
                Zingo Assist
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '1.5rem',
                textAlign: 'justify'
              }}>
                Zingo Assist provides professional virtual assistant services that help businesses scale by streamlining administrative and operational tasks.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                Our trained remote teams specialize in real estate, finance, and customer support, bringing efficiency and cost-effectiveness to the modern workforce.
              </p>
              <button
                onClick={() => window.open('https://www.zingoassist.us/', '_blank', 'noopener,noreferrer')}
                style={{
                  background: '#8B5CF6',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#7C3AED';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#8B5CF6';
                }}
              >
                Visit Website
              </button>
            </div>
          </div>

          {/* Alpha Medi Assist */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '3rem',
            marginBottom: '4rem',
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
          }}>
            <div style={{ flex: '1 1 500px', maxWidth: 600, order: isMobile ? 2 : 1 }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#333',
                marginBottom: '1.5rem'
              }}>
                Alpha Medi Assist
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '1.5rem',
                textAlign: 'justify'
              }}>
                Alpha Medi Assist is a comprehensive healthcare solutions platform designed to simplify operations, enhance patient care, and improve service delivery.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                We empower healthcare providers with tailored solutions that boost efficiency, streamline data management, and elevate patient experiences.
              </p>
              <button
                onClick={() => window.open('https://alphamediassist.com/', '_blank', 'noopener,noreferrer')}
                style={{
                  background: '#3B82F6',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2563EB';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#3B82F6';
                }}
              >
                Visit Website
              </button>
            </div>
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', order: isMobile ? 1 : 2 }}>
              <div style={{
                width: '100%',
                maxWidth: isMobile ? '100%' : isTablet ? '450px' : '500px',
                height: isMobile ? '250px' : isTablet ? '350px' : '400px',
                background: 'url("/Project/project4.jpg") center/cover',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
              }}>
              </div>
            </div>
          </div>

          {/* Learn with Alpha */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '3rem',
            marginBottom: '4rem',
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
          }}>
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '100%',
                maxWidth: isMobile ? '100%' : isTablet ? '450px' : '500px',
                height: isMobile ? '250px' : isTablet ? '350px' : '400px',
                background: 'url("/Project/Project1.png") center/cover',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
              }}>
              </div>
            </div>
            <div style={{ flex: '1 1 500px', maxWidth: 600 }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#333',
                marginBottom: '1.5rem'
              }}>
                Learn with Alpha
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '1.5rem',
                textAlign: 'justify'
              }}>
                Learn with Alpha is a modern e-learning platform offering interactive and dynamic digital learning experiences.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                The platform supports both students and professionals with flexible, personalized learning paths to help them build skills and advance their careers.
              </p>
              <button
                onClick={() => window.open('https://learnwithalpha.com/', '_blank', 'noopener,noreferrer')}
                style={{
                  background: '#10B981',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#059669';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#10B981';
                }}
              >
                Visit Website
              </button>
            </div>
          </div>

          {/* Alpha Ahead Estate */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '3rem',
            marginBottom: '4rem',
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
          }}>
            <div style={{ flex: '1 1 500px', maxWidth: 600, order: isMobile ? 2 : 1 }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#333',
                marginBottom: '1.5rem'
              }}>
                Alpha Ahead Real Estate Brokerage
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '1.5rem',
                textAlign: 'justify'
              }}>
                Alpha Ahead Real Estate Brokerage is our real estate arm, dedicated to connecting buyers and sellers with seamless property solutions in Dubai and beyond.
              </p>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.6,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                We specialize in sales, leasing, and investment opportunities, ensuring clients benefit from trusted expertise, market insights, and personalized service.
              </p>
              <div style={{ 
                display: 'flex', 
                justifyContent: isMobile ? 'center' : 'flex-start',
                marginTop: '1rem'
              }}>
                <button
                  onClick={() => window.open('https://alphaahead.estate/', '_blank', 'noopener,noreferrer')}
                  style={{
                    background: '#06B6D4',
                    color: '#fff',
                    padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: isMobile ? '0.9rem' : '1rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'background 0.3s ease',
                    minWidth: isMobile ? '140px' : '160px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0891B2';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#06B6D4';
                  }}
                >
                  Visit Website
                </button>
              </div>
            </div>
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', order: isMobile ? 1 : 2 }}>
              <div style={{
                width: '100%',
                maxWidth: isMobile ? '100%' : isTablet ? '450px' : '500px',
                height: isMobile ? '250px' : isTablet ? '350px' : '400px',
                background: 'url("/Project/Project9.jpg") center/cover',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
              }}>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#333', marginBottom: '1rem' }}>
            Do you have a Product or Business idea?
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#666', marginBottom: '2rem' }}>
            Email us at: <a href="mailto:contact@alphaaheadllc.com" style={{ color: '#DC520E', textDecoration: 'none', fontWeight: 600 }}>contact@alphaaheadllc.com</a>
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#666', marginBottom: '2rem' }}>
            If you have a vision for your business or a project idea, we'd love to discuss it with you. Let us help you turn your ideas into reality by leveraging innovative solutions that drive growth and efficiency.
          </p>
          <button
            onClick={goToContact}
            style={{
              background: '#DC520E',
              color: '#fff',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#b8440b';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#DC520E';
            }}
          >
            Let's Talk
          </button>
        </div>
      </section>

    </>
  );
};

export default ProjectPage;
