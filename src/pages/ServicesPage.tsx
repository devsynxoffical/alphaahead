import React, { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

  const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const { t } = useTranslation();
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;
  const isLargeScreen = screenWidth >= 1440;
  const paddingSection = isMobile ? "2rem 1rem" : isTablet ? "3rem 2rem" : isLargeScreen ? "5rem 3rem" : "4rem 2rem";
  const headingFontSize = isMobile ? "1.5rem" : isTablet ? "2rem" : isLargeScreen ? "3rem" : "2.5rem";
  const layoutDirection = isMobile ? "column" : "row";
  const headingFont = isMobile ? '1.5rem' : isTablet ? '2rem' : isLargeScreen ? '3rem' : '2.5rem';
  const industryCards = t('industries.list', { returnObjects: true }) as { title: string; desc: string; image: string }[];
  const openPortfolio = () => {window.open('/Copy of portfolio.pdf', '_blank', 'noopener,noreferrer');};
  const goToContact = () => navigate('/contactUs');

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Our Services Header */}
      <section style={{ background: '#DC520E', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ fontSize: headingFont, fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            Our Services
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#fff', maxWidth: 800, margin: '0 auto', opacity: 0.95 }}>
            We provide tailored digital solutions, tech consulting, and marketing services to help your business thrive.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ background: '#f9f9f9', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          
          {/* Virtual Assistant Services */}
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
                background: 'url("/Services/Virtual Assistant.jpg") center/cover',
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
                Virtual Assistant Services
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                Free up your time and scale smarter with dedicated virtual assistants. Our trained remote teams specialize in lead intake, CRM management, calendar coordination, and administrative support, bringing efficiency and cost-effectiveness to your business operations.
              </p>
              <button
                onClick={openPortfolio}
                style={{
                  background: '#8B5CF6',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#7C3AED';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#8B5CF6';
                }}
              >
                Explore VA Solutions
              </button>
            </div>
          </div>

          {/* Healthcare Solutions */}
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
                Healthcare Solutions
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                Streamlined tools for healthcare providers and organizations. We empower healthcare providers with tailored solutions that boost efficiency, streamline data management, and elevate patient experiences through comprehensive medical billing and compliance support.
              </p>
              <button
                onClick={openPortfolio}
                style={{
                  background: '#3B82F6',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2563EB';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#3B82F6';
                }}
              >
                See Healthcare Case Studies
              </button>
            </div>
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', order: isMobile ? 1 : 2 }}>
              <div style={{
                width: '100%',
                maxWidth: isMobile ? '100%' : isTablet ? '450px' : '500px',
                height: isMobile ? '250px' : isTablet ? '350px' : '400px',
                background: 'url("/Services/Health care solution.jpg") center/cover',
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

          {/* Software Development */}
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
                background: 'url("/Services/Software Development.jpg") center/cover',
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
                Software Development
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                Custom-built software and web platforms for your growth. Our team leverages industry-leading technology stacks to build robust, scalable solutions including websites, mobile apps, system integrations, and cloud-based platforms.
              </p>
              <button
                onClick={openPortfolio}
                style={{
                  background: '#10B981',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#059669';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#10B981';
                }}
              >
                Discover Our Web Work
              </button>
            </div>
          </div>

          {/* Lead Generation */}
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
              <div style={{
                width: '4px',
                height: '40px',
                background: '#333',
                marginBottom: '1rem'
              }} />
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#333',
                marginBottom: '1.5rem'
              }}>
                Lead Generation
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                Fuel your pipeline with qualified, conversion-ready leads. We specialize in creating high-quality lead generation strategies for any industry, employing data-driven insights and advanced tools to develop campaigns that effectively capture and nurture prospects.
              </p>
              <button
                onClick={openPortfolio}
                style={{
                  background: '#F59E0B',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#D97706';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#F59E0B';
                }}
              >
                Grow with Lead Gen
              </button>
            </div>
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', order: isMobile ? 1 : 2 }}>
              <div style={{
                width: '100%',
                maxWidth: isMobile ? '100%' : isTablet ? '450px' : '500px',
                height: isMobile ? '250px' : isTablet ? '350px' : '400px',
                background: 'url("/Services/Lead Gen.jpg") center/cover',
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

          {/* Digital Marketing */}
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
                background: 'url("/Services/Digital Marketing.jpg") center/cover',
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
                Digital Marketing
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                End-to-end digital strategies that drive visibility. We offer comprehensive digital marketing services including SEO, paid campaigns, social media growth strategies, video marketing, and ongoing optimization to build your online presence.
              </p>
              <button
                onClick={openPortfolio}
                style={{
                  background: '#EC4899',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#DB2777';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#EC4899';
                }}
              >
                See Marketing Projects
              </button>
            </div>
          </div>

          {/* Online Education */}
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
              <div style={{
                width: '4px',
                height: '40px',
                background: '#333',
                marginBottom: '1rem'
              }} />
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: '#333',
                marginBottom: '1.5rem'
              }}>
                Online Education (E-Learning)
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                Dynamic, interactive learning for professionals and students. We create engaging e-learning platforms with personalized learning paths, gamified courses, and corporate training solutions that build skills and drive career growth.
              </p>
              <button
                onClick={openPortfolio}
                style={{
                  background: '#8B5CF6',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#7C3AED';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#8B5CF6';
                }}
              >
                Explore E-Learning
              </button>
            </div>
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', order: isMobile ? 1 : 2 }}>
              <div style={{
                width: '100%',
                maxWidth: isMobile ? '100%' : isTablet ? '450px' : '500px',
                height: isMobile ? '250px' : isTablet ? '350px' : '400px',
                background: 'url("/Services/Online Education (E-Learning).jpg") center/cover',
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

          {/* Real Estate Solutions */}
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
                background: 'url("/Services/Real%20estate%20solution.jpg") center/cover',
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
                Real Estate Solutions
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                Technology-driven solutions for property professionals. We provide comprehensive real estate services including digital property marketing, virtual tours, investor insights, and lead generation solutions for buyers and sellers.
              </p>
              <button
                onClick={openPortfolio}
                style={{
                  background: '#06B6D4',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0891B2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#06B6D4';
                }}
              >
                See Real Estate Solutions
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ServicesPage;