import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Clients: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [screenWidth, setScreenWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;
  const isLargeScreen = screenWidth >= 1440;
  const paddingSection = isMobile ? "2rem 1rem" : isTablet ? "3rem 2rem" : isLargeScreen ? "5rem 3rem" : "4rem 2rem";
  const headingFontSize = isMobile ? "1.5rem" : isTablet ? "2rem" : isLargeScreen ? "3rem" : "2.5rem";

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const clients = [
    {
      name: "Zingo Assist",
      category: "Virtual Assistant Services",
      image: "/Clients/Zingo.png",
      description: "Professional virtual assistant services that help businesses scale by streamlining administrative and operational tasks. Our trained remote teams specialize in real estate, finance, and customer support.",
      services: ["Virtual Assistant", "Customer Support", "Administrative Tasks", "Business Process Outsourcing"],
      website: "#"
    },
    {
      name: "Learn with Alpha",
      category: "E-Learning Platform",
      image: "/Clients/learn%20with%20alpha.png",
      description: "A modern e-learning platform offering interactive and dynamic digital learning experiences. The platform supports both students and professionals with flexible, personalized learning paths.",
      services: ["E-Learning Platform", "Skill Development", "Online Courses", "Educational Technology"],
      website: "#"
    },
    {
      name: "Alpha Ahead Real Estate Brokerage LLC",
      category: "Real Estate Solutions",
      image: "/Clients/Alpha%20estate.png",
      description: "Digital real estate solutions connecting buyers and sellers with seamless property solutions in Dubai and beyond. We specialize in sales, leasing, and investment opportunities.",
      services: ["Real Estate", "Property Management", "Investment Advisory", "Digital Solutions"],
      website: "#"
    },
    {
      name: "Port Libert",
      category: "Logistics & Supply Chain",
      image: "/Clients/Portlibert.png",
      description: "Comprehensive logistics and supply chain solutions designed to optimize operations and enhance efficiency in global trade and transportation.",
      services: ["Logistics", "Supply Chain Management", "Global Trade", "Transportation"],
      website: "#"
    },
    {
      name: "Du Partner",
      category: "Business Development",
      image: "/Clients/du%20partner.png",
      description: "Strategic business development services helping companies expand their market presence and establish valuable partnerships in the UAE and beyond.",
      services: ["Business Development", "Market Expansion", "Partnership Building", "Strategic Consulting"],
      website: "#"
    },
    {
      name: "Alpha Medi Assist",
      category: "Healthcare Solutions",
      image: "/Clients/Alpha%20medi%20assist.png",
      description: "A comprehensive healthcare solutions platform designed to simplify operations, enhance patient care, and improve service delivery for healthcare providers.",
      services: ["Healthcare Platform", "Patient Care", "Medical Operations", "Healthcare Technology"],
      website: "#"
    },
    {
      name: "Heritage Capital",
      category: "Financial Services",
      image: "/Clients/Heritagecapital.png",
      description: "Professional financial services and investment solutions helping clients build wealth and secure their financial future through strategic planning and expert guidance.",
      services: ["Financial Planning", "Investment Advisory", "Wealth Management", "Financial Services"],
      website: "#"
    }
  ];

  return (
    <>
      {/* Clients Header */}
      <section style={{ background: '#DC520E', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ fontSize: headingFontSize, fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            Our Valued Clients
          </h1>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#fff', maxWidth: 800, margin: '0 auto', opacity: 0.95 }}>
            Discover the diverse range of projects we've delivered for our valued clients across various industries. Each partnership represents our commitment to excellence and innovation.
          </p>
        </div>
      </section>

      {/* Clients Grid */}
      <section style={{ background: '#f9f9f9', padding: paddingSection }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {clients.map((client, index) => (
              <div
                key={index}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
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
                <div style={{
                  width: '100%',
                  height: '200px',
                  background: `url(${client.image}) center/cover no-repeat`,
                  backgroundColor: '#f8f9fa',
                  borderBottom: '1px solid #f0f0f0'
                }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#333',
                    marginBottom: '0.5rem'
                  }}>
                    {client.name}
                  </h3>
                  <p style={{
                    color: '#DC520E',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '1rem'
                  }}>
                    {client.category}
                  </p>
                  <p style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: '#666',
                    marginBottom: '1rem'
                  }}>
                    {client.description}
                  </p>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: '#333',
                      marginBottom: '0.5rem'
                    }}>
                      Services:
                    </h4>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {client.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          style={{
                            background: '#f0f0f0',
                            color: '#666',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: 500
                          }}
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => window.open(client.website, '_blank')}
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
                      width: '100%'
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#333', marginBottom: '1rem' }}>
            Ready to Join Our Success Stories?
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#666', marginBottom: '2rem' }}>
            Let's discuss how we can help transform your business with innovative solutions and expert guidance.
          </p>
          <button
            onClick={() => navigate('/contactUs')}
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
            Get Started Today
          </button>
        </div>
      </section>
    </>
  );
};

export default Clients;
