import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

  const ServicesPage: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;
  const headingFont = isMobile ? '1.5rem' : isTablet ? '2rem' : '2.5rem';

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
              <Link
                to="/virtual-assistant"
                style={{
                  background: '#8B5CF6',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-flex',
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
              </Link>
            </div>
          </div>

          {/* Cold Calling Services */}
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
                Cold Calling Services
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                Professional cold calling services to expand your business reach and generate qualified leads. Our experienced team specializes in targeted outreach campaigns that deliver results and help you connect with potential customers effectively.
              </p>
              <Link
                to="/cold-calling"
                style={{
                  background: '#3B82F6',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-flex',
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
                Explore Cold Calling Solutions
              </Link>
            </div>
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', order: isMobile ? 1 : 2 }}>
              <div style={{
                width: '100%',
                maxWidth: isMobile ? '100%' : isTablet ? '450px' : '500px',
                height: isMobile ? '250px' : isTablet ? '350px' : '400px',
                background: 'url("/cCalling.avif") center/cover',
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

          {/* Personal Assistance Services */}
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
                background: 'url("/PAS.jpg") center/cover',
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
                Personal Assistance Services
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                Comprehensive personal assistance services to help you manage your daily tasks and business operations efficiently. Our dedicated assistants provide support with scheduling, research, data entry, and administrative tasks to keep you focused on what matters most.
              </p>
              <Link
                to="/personal-assistant"
                style={{
                  background: '#10B981',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-flex',
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
                Explore Personal Assistance
              </Link>
            </div>
          </div>

          {/* Virtual Business Assistant */}
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
                Virtual Business Assistant
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                Professional virtual business assistants to streamline your operations and boost productivity. Our skilled team handles complex business tasks, project management, client communication, and strategic support to help your business grow efficiently.
              </p>
              <Link
                to="/business-assistant"
                style={{
                  background: '#F59E0B',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-flex',
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
                Explore Business Assistant Solutions
              </Link>
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

          {/* Virtual Property Management Services */}
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
                background: 'url("/vpm.webp") center/cover',
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
                Virtual Property Management Services
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                Comprehensive virtual property management solutions to streamline your real estate operations. Our team handles tenant communication, maintenance coordination, rent collection, and property marketing to maximize your investment returns.
              </p>
              <Link
                to="/property-management"
                style={{
                  background: '#EC4899',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-flex',
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
                Explore Property Management Solutions
              </Link>
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
              <Link
                to="/lead-generation"
                style={{
                  background: '#8B5CF6',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-flex',
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
                Grow with Lead Gen
              </Link>
            </div>
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', order: isMobile ? 1 : 2 }}>
              <div style={{
                width: '100%',
                maxWidth: isMobile ? '100%' : isTablet ? '450px' : '500px',
                height: isMobile ? '250px' : isTablet ? '350px' : '400px',
                background: 'url("/leadG.jpg") center/cover',
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

          {/* Real Estate Transaction Coordinator */}
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
                background: 'url("/Transaction-Coordinator.jpg") center/cover',
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
                Real Estate Transaction Coordinator
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                Professional real estate transaction coordination services to ensure smooth property transactions. Our experienced coordinators handle all aspects of the transaction process, from contract to closing, ensuring timely and successful deals.
              </p>
              <Link
                to="/transaction-coordinator"
                style={{
                  background: '#06B6D4',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-flex',
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
                Explore Transaction Coordination
              </Link>
            </div>
          </div>

          {/* SEO */}
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
                SEO
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                Comprehensive SEO services to improve your website's visibility and organic search rankings. Our SEO experts implement proven strategies to drive targeted traffic and increase your online presence across search engines.
              </p>
              <Link
                to="/seo"
                style={{
                  background: '#10B981',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-flex',
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
                Explore SEO Solutions
              </Link>
            </div>
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', order: isMobile ? 1 : 2 }}>
              <div style={{
                width: '100%',
                maxWidth: isMobile ? '100%' : isTablet ? '450px' : '500px',
                height: isMobile ? '250px' : isTablet ? '350px' : '400px',
                background: 'url("/seeo.jpg") center/cover',
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

          {/* Web Development Service */}
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
                background: 'url("/wd.jpg") center/cover',
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
                Web Development Service
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                Custom web development solutions tailored to your business needs. Our expert developers create responsive, scalable websites and web applications using the latest technologies to ensure optimal performance and user experience.
              </p>
              <Link
                to="/web-development"
                style={{
                  background: '#3B82F6',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-flex',
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
                Explore Web Development
              </Link>
            </div>
          </div>

          {/* Digital Marketing Agency */}
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
                Digital Marketing Agency
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                Comprehensive digital marketing solutions to elevate your brand's online presence. Our agency specializes in strategic campaigns, social media management, content marketing, and performance optimization to drive growth and maximize your digital ROI.
              </p>
              <Link
                to="/digital-marketing"
                style={{
                  background: '#8B5CF6',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-flex',
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
                Explore Digital Marketing Solutions
              </Link>
            </div>
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', order: isMobile ? 1 : 2 }}>
              <div style={{
                width: '100%',
                maxWidth: isMobile ? '100%' : isTablet ? '450px' : '500px',
                height: isMobile ? '250px' : isTablet ? '350px' : '400px',
                background: 'url("/dmservices.jpg") center/cover',
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

          {/* Graphic Designing */}
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
                Graphic Designing
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                Creative graphic design services to enhance your brand identity and visual communication. Our talented designers create compelling logos, marketing materials, and digital assets that capture your brand essence and engage your audience.
              </p>
              <Link
                to="/graphic-design"
                style={{
                  background: '#EC4899',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-flex',
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
                Explore Graphic Design
              </Link>
            </div>
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', order: isMobile ? 1 : 2 }}>
              <div style={{
                width: '100%',
                maxWidth: isMobile ? '100%' : isTablet ? '450px' : '500px',
                height: isMobile ? '250px' : isTablet ? '350px' : '400px',
                background: 'url("/feature-41.webp") center/cover',
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

          {/* Video Editing Services */}
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
                background: 'url("/VE.jpg") center/cover',
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
                Video Editing Services
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                Professional video editing services to create compelling visual content for your business. Our skilled editors transform raw footage into polished videos that engage your audience and effectively communicate your message across all platforms.
              </p>
              <Link
                to="/video-editing"
                style={{
                  background: '#8B5CF6',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-flex',
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
                Explore Video Editing
              </Link>
            </div>
          </div>

          {/* IT Support */}
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
                IT Support
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#666',
                marginBottom: '2rem',
                textAlign: 'justify'
              }}>
                Comprehensive IT support services to keep your business technology running smoothly. Our expert technicians provide remote and on-site support, system maintenance, troubleshooting, and proactive monitoring to ensure optimal performance.
              </p>
              <Link
                to="/it-support"
                style={{
                  background: '#F59E0B',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  display: 'inline-flex',
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
                Explore IT Support
              </Link>
            </div>
            <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', order: isMobile ? 1 : 2 }}>
              <div style={{
                width: '100%',
                maxWidth: isMobile ? '100%' : isTablet ? '450px' : '500px',
                height: isMobile ? '250px' : isTablet ? '350px' : '400px',
                background: 'url("/ITSupport.webp") center/cover',
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
    </>
  );
};

export default ServicesPage;