import React, { useEffect, useState } from 'react';
import { initialWidth } from '../utils/hydration';
import { useNavigate } from 'react-router-dom';

const OurTeam: React.FC = () => {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState<number>(initialWidth);
  
  const isMobile = screenWidth < 768;
  const isTablet = screenWidth >= 768 && screenWidth < 1024;
  const isLargeScreen = screenWidth >= 1440;
  const paddingSection = isMobile ? "2rem 1rem" : isTablet ? "3rem 2rem" : isLargeScreen ? "5rem 3rem" : "4rem 2rem";
  const headingFontSize = isMobile ? "1.5rem" : isTablet ? "2rem" : isLargeScreen ? "3rem" : "2.5rem";

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Team data
  const executiveMembers = [
    {
      name: "Shehreyar Khan",
      role: "Director and Founder",
      image: "/Our%20Team/Shehriyar%20Khan.jpg",
      isMale: true
    },
    {
      name: "Ehtisham Shoukat",
      role: "Enterprise Portfolio Manager/Co-Founder",
      image: "/Our%20Team/Ehtisham%20Soukat.JPG",
      isMale: true
    },
    {
      name: "Nimra Said Khan",
      role: "Operations Manager",
      image: "/Nimra.jpeg",
      isMale: false
    },
    {
      name: "Dr. Sanna Urooj",
      role: "Information Officer",
      image: "/Our%20Team/WhatsApp%20Image%202025-09-08%20at%2022.37.26_44dc02eb.jpg",
      isMale: false
    },
    {
      name: "David Bowman",
      role: "Sales Manager",
      image: "/David.jpeg",
      isMale: true
    },
    {
      name: "Joshua Walton",
      role: "Client Relationship Manager",
      image: "/joseph.jpeg",
      isMale: true
    },
    {
      name: "Habib Faqeri",
      role: "Growth/Client Acquisition Manager",
      image: "/Our%20Team/Habib%20faqeri.jpg",
      isMale: true
    }
  ];


    const TeamCard: React.FC<{ name: string; role: string; image?: string; isCEO?: boolean; isMale?: boolean }> = ({
    name, role, image, isCEO = false, isMale = true
  }) => (
    <div style={{
      background: '#fff',
      borderRadius: '16px',
      padding: isCEO ? '2rem 1.5rem' : '1.5rem 1rem',
      boxShadow: isCEO ? '0 8px 40px rgba(0,0,0,0.15)' : '0 4px 20px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      borderTop: isCEO ? '6px solid #DC520E' : '4px solid #DC520E',
      cursor: 'pointer',
      transform: isCEO ? 'scale(1.02)' : 'scale(1)',
      position: 'relative',
      minHeight: '400px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = isCEO ? 'translateY(-8px) scale(1.02)' : 'translateY(-4px)';
      e.currentTarget.style.boxShadow = isCEO ? '0 12px 50px rgba(0,0,0,0.2)' : '0 8px 30px rgba(0,0,0,0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = isCEO ? 'scale(1.02)' : 'translateY(0)';
      e.currentTarget.style.boxShadow = isCEO ? '0 8px 40px rgba(0,0,0,0.15)' : '0 4px 20px rgba(0,0,0,0.1)';
    }}>
      {isCEO && (
        <div style={{
          position: 'absolute',
          top: '-15px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#DC520E',
          color: '#fff',
          padding: '0.5rem 1.5rem',
          borderRadius: '25px',
          fontSize: '0.9rem',
          fontWeight: 700,
          boxShadow: '0 4px 15px rgba(220, 82, 14, 0.3)'
        }}>
          CEO & FOUNDER
        </div>
      )}
        {image && (
          <div style={{
            width: isMobile ? '150px' : isTablet ? '180px' : '200px',
            height: isMobile ? '150px' : isTablet ? '180px' : '200px',
            borderRadius: '50%',
            background: `url(${image}) top/cover`,
            margin: '0 auto 1rem',
            border: isCEO ? '4px solid #DC520E' : '3px solid #DC520E',
            boxShadow: isCEO ? '0 4px 20px rgba(220, 82, 14, 0.2)' : '0 2px 10px rgba(0,0,0,0.1)',
            backgroundColor: '#f8f8f8',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            flexShrink: 0
          }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = isCEO ? '0 8px 30px rgba(220, 82, 14, 0.3)' : '0 6px 25px rgba(0,0,0,0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = isCEO ? '0 4px 20px rgba(220, 82, 14, 0.2)' : '0 2px 10px rgba(0,0,0,0.1)';
        }} />
      )}
      <h3 style={{
        fontSize: isCEO ? '1.3rem' : '1rem',
        fontWeight: 700,
        color: '#333',
        marginBottom: '0.5rem',
        textAlign: 'center',
        lineHeight: 1.2
      }}>{name}</h3>
      <p style={{
        fontSize: isCEO ? '1rem' : '0.85rem',
        fontWeight: 600,
        color: '#DC520E',
        marginBottom: '0',
        textAlign: 'center',
        lineHeight: 1.3
      }}>{role}</p>

    </div>
  );


  return (
    <>
      {/* Hero Section */}
      <section style={{
        background: '#DC520E',
        padding: '6rem 2rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{
            fontSize: headingFontSize,
            fontWeight: 700,
            color: '#fff',
            marginBottom: '1rem'
          }}>
            Meet Our Team
          </h1>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: 1.6,
            color: '#fff',
            maxWidth: 800,
            margin: '0 auto',
            opacity: 0.95
          }}>
            The people driving innovation, strategy, and growth at Alpha Ahead.
          </p>
        </div>
      </section>

             {/* Executive Members */}
       <section style={{ background: '#f9f9f9', padding: paddingSection }}>
         <div style={{ maxWidth: 1200, margin: '0 auto' }}>

           <h2 style={{
             fontSize: headingFontSize,
             fontWeight: 700,
             color: '#333',
             textAlign: 'center',
             marginBottom: '3rem'
           }}>
             Executive Members
           </h2>
           
           {/* All Executive Members in 3x3 Grid */}
           <div style={{
             display: 'grid',
             gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
             gap: isMobile ? '1.5rem' : '1.5rem',
             marginBottom: '4rem',
             alignItems: 'stretch'
           }}>
             {executiveMembers.map((member, index) => (
               <TeamCard key={index} {...member} isCEO={false} />
            ))}
          </div>
        </div>
      </section>

             {/* Call to Action */}
       <section style={{ background: '#fff', padding: '2rem 2rem', textAlign: 'center' }}>
         <div style={{ maxWidth: 1200, margin: '0 auto' }}>
           <h2 style={{
             fontSize: headingFontSize,
             fontWeight: 700,
             color: '#DC520E',
             marginBottom: '0.5rem'
           }}>
             Join Our Team
           </h2>
           <p style={{
             fontSize: '1.1rem',
             lineHeight: 1.6,
             color: '#DC520E',
             maxWidth: 600,
             margin: '0 auto 1rem',
             opacity: 0.8
           }}>
             Ready to be part of our innovative team? Explore career opportunities and grow with us.
           </p>
           <button 
             onClick={() => navigate('/careers')}
             style={{
             background: '#DC520E',
             color: '#fff',
             border: 'none',
               padding: '0.75rem 1.5rem',
             borderRadius: '8px',
               fontSize: '1rem',
             fontWeight: 600,
             cursor: 'pointer',
             transition: 'all 0.3s ease'
           }}
           onMouseEnter={(e) => {
             e.currentTarget.style.transform = 'translateY(-2px)';
             e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 82, 14, 0.3)';
           }}
           onMouseLeave={(e) => {
             e.currentTarget.style.transform = 'translateY(0)';
             e.currentTarget.style.boxShadow = 'none';
           }}>
             View Careers
           </button>
         </div>
       </section>
    </>
  );
};

export default OurTeam;
