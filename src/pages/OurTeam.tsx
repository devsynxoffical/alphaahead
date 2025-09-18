import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const OurTeam: React.FC = () => {
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

  // Team data
  const executiveMembers = [
    {
      name: "Shehreyar Khan",
      role: "CEO",
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
      name: "Dr. Sanna Urooj",
      role: "Chief Information Officer (CIO)",
      image: "/Our%20Team/WhatsApp%20Image%202025-09-08%20at%2022.37.26_44dc02eb.jpg",
      isMale: false
    },
    {
      name: "Habib Faqeri",
      role: "Growth/Client Acquisition Manager",
      image: "/Our%20Team/Habib%20faqeri.jpg",
      isMale: true
    },
    {
      name: "Huraira Khan",
      role: "HR Manager",
      image: "/Our%20Team/Huraira%20Khan.JPG",
      isMale: false
    },
    {
      name: "Saleha Safdar",
      role: "Business Portfolio Manager/Managing Director DXB",
      image: "/Our%20Team/Saleha%20Safdar.jpg",
      isMale: false
    },
    {
      name: "Shehriyar Nawaz",
      role: "Legal Advisor",
      image: "/Our%20Team/shehriyar%20legal%20advisor.png",
      isMale: true
    }
  ];

  const teamLeads = [
    {
      name: "Rubab Kashif",
      role: "Team Lead (Morning)",
      image: "/Our%20Team/Rubab%20Kashif.JPG",
      isMale: false
    },
    {
      name: "Shahabudin Said",
      role: "Team Lead (Evening)",
      image: "/Our%20Team/Shahabudin.JPG",
      isMale: true
    },
    {
      name: "Habib Sultan",
      role: "Account Executive",
      image: "/Our%20Team/Habib%20Sultan.JPG",
      isMale: true
    },
    {
      name: "Irfan Saidmeeri",
      role: "HR Assistant",
      image: "/Our%20Team/Irfam%20Said%20Meery.JPG",
      isMale: true
    },
    {
      name: "Muhammad Hamza Ghafoor",
      role: "Account Executive",
      image: "/Our%20Team/Hamza%20Ghafoor.JPG",
      isMale: true
    },
    {
      name: "Muhammad Umer",
      role: "Account Executive",
      image: "/Our%20Team/Muhamad%20Umer.JPG",
      isMale: true
    },
    {
      name: "Usama Ahmed",
      role: "Accountant",
      image: "/Our%20Team/Usama%20Ahmed.png",
      isMale: true
    }
  ];

  const marketingTeam = [
    {
      name: "Syed Hassan Askari",
      role: "Social Media Manager",
      image: "/Our%20Team/Syed%20Hassan%20Askari.jpg",
      isMale: true
    },
    {
      name: "Muhammad Daniyal",
      role: "Web Developer",
      image: "/Our%20Team/Muhammad%20Daniyal.JPG",
      isMale: true
    },
    {
      name: "Muhammad Jamil",
      role: "Graphic Designer",
      image: "/Our%20Team/Jamil.png",
      isMale: true
    },
    {
      name: "Rafay Alvi",
      role: "Upwork Bidder",
      image: "/Our%20Team/Rafay%20alvi.JPG",
      isMale: true
    },
    {
      name: "Syed Hassan Ali Shah",
      role: "Full Stack Developer",
      image: "/Our%20Team/Syed%20Hassan%20Ali.JPG",
      isMale: true
    },
    {
      name: "Ahmed Raza",
      role: "SEO Expert",
      image: "/Our%20Team/Ahmed.png",
      isMale: true
    },
    {
      name: "Sana Fatima",
      role: "Frontend Developer",
      image: "/Our%20Team/Sana%20Fatima.png",
      isMale: false
    },
    {
      name: "Afrasiab",
      role: "Content Writer",
      image: "/Our%20Team/Afrasiab.png",
      isMale: true
    }
  ];

  const virtualAssistants = [
    { name: "Benish Tufail", image: "/Our%20Team/Beinish.JPG", isMale: false },
    { name: "Haider Abbas Kayani", image: "/Our%20Team/Haider%20Abbas%20Kiyani.JPG", isMale: true },
    { name: "Muhammad Zubair Yameen", image: "/Our%20Team/Zubair.JPG", isMale: true },
    { name: "Arooba Shehzad", image: "/Our%20Team/Arooba%20Shehzad.JPG", isMale: false },
    { name: "Ayub Sultan", image: "/Our%20Team/Ayub%20Sultan.JPG", isMale: true },
    { name: "Hazrat Bilal", image: "/Our%20Team/Hazrat%20bilal.png", isMale: true },
    { name: "Saifullah Khan", image: "/Our%20Team/Saif.jpg", isMale: true },
    { name: "Anas Javed", image: "/Our%20Team/Anas%20Javed.jpg", isMale: true },
    { name: "Fareha Raja", image: "/Our%20Team/Fareha%20Raja.png", isMale: false },
    { name: "Fazila Akram", image: "/Our%20Team/Fazila%20Akram.jpg", isMale: false },
    { name: "Shaheer Alvi", image: "/Our%20Team/Shaheer.jpg", isMale: true }
  ];

  const bdeTeam = [
    {
      name: "Osama",
      role: "Business Development Executive",
      image: "/Our%20Team/Osama.png",
      isMale: true
    },
    {
      name: "Tooba Ahmed Khan",
      role: "Business Development Executive",
      image: "/Our%20Team/Tooba%20Ahmed.JPG",
      isMale: false
    },
    {
      name: "Sajida Parveen",
      role: "Business Development Executive",
      image: "/Our%20Team/Miss%20sajida.JPG",
      isMale: false
    },
    {
      name: "Rubab Jahanzaib",
      role: "Business Development Executive",
      image: "/Our%20Team/Rubab%20Jahanzaib.png",
      isMale: false
    },
    {
      name: "Awais Said",
      role: "Business Development Executive",
      image: "/Our%20Team/Awais%20Said.JPG",
      isMale: true
    },
    {
      name: "Musahib",
      role: "Business Development Executive",
      image: "/Our%20Team/Musahib.JPG",
      isMale: true
    },
    {
      name: "Ali Danesh Karimi",
      role: "Business Development Executive",
      image: "/Our%20Team/Ali%20Danish.jpg",
      isMale: true
    },
    {
      name: "Muhammad Junaid Yameen",
      role: "Business Development Executive",
      image: "/Our%20Team/Junaid%20.jpg",
      isMale: true
    },
    {
      name: "Abdul Mannan",
      role: "Business Development Executive",
      image: "/Our%20Team/Abdul%20Manan.png",
      isMale: true
    },
    {
      name: "Yaseen Gull",
      role: "Business Development Executive",
      image: "/Our%20Team/Yaseeen%20Gul.jpg",
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
               <TeamCard key={index} {...member} isCEO={index === 0} />
             ))}
           </div>
         </div>
       </section>

                  {/* Team Leads */}
      <section style={{ background: '#f9f9f9', padding: paddingSection }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{
            fontSize: headingFontSize,
            fontWeight: 700,
            color: '#333',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Team Leads / Account Executive
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '1.5rem' : '1.5rem',
            marginBottom: '4rem',
            alignItems: 'stretch'
          }}>
            {teamLeads.map((lead, index) => (
              <TeamCard key={index} {...lead} />
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Team */}
      <section style={{ background: '#fff', padding: paddingSection }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{
            fontSize: headingFontSize,
            fontWeight: 700,
            color: '#333',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Marketing Team
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '1.5rem' : '1.5rem',
            marginBottom: '4rem',
            alignItems: 'stretch'
          }}>
            {marketingTeam.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Assistant Team */}
      <section style={{ background: '#fff', padding: paddingSection }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{
            fontSize: headingFontSize,
            fontWeight: 700,
            color: '#333',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Virtual Assistant Team
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '1.5rem' : '1.5rem',
            marginBottom: '4rem',
            alignItems: 'stretch'
          }}>
            {virtualAssistants.map((va, index) => (
              <TeamCard key={index} name={va.name} role="Virtual Assistant" image={va.image} isMale={va.isMale} />
            ))}
          </div>
        </div>
      </section>

      {/* BDE Team */}
      <section style={{ background: '#f9f9f9', padding: paddingSection }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{
            fontSize: headingFontSize,
            fontWeight: 700,
            color: '#333',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            BDE Team
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '1.5rem' : '1.5rem',
            marginBottom: '4rem',
            alignItems: 'stretch'
          }}>
            {bdeTeam.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

             {/* Call to Action */}
       <section style={{ background: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
         <div style={{ maxWidth: 1200, margin: '0 auto' }}>
           <h2 style={{
             fontSize: headingFontSize,
             fontWeight: 700,
             color: '#DC520E',
             marginBottom: '1rem'
           }}>
             Join Our Team
           </h2>
           <p style={{
             fontSize: '1.1rem',
             lineHeight: 1.6,
             color: '#DC520E',
             maxWidth: 600,
             margin: '0 auto 2rem',
             opacity: 0.8
           }}>
             Ready to be part of our innovative team? Explore career opportunities and grow with us.
           </p>
           <button style={{
             background: '#DC520E',
             color: '#fff',
             border: 'none',
             padding: '1rem 2rem',
             borderRadius: '8px',
             fontSize: '1.1rem',
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
