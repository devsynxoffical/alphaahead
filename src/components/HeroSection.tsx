import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const projectCards = t("projects.list", { returnObjects: true }) as any[];
  const industryCards = t("industries.list", { returnObjects: true }) as any[];
  const openPortfolio = () => { window.open('/Copy of portfolio.pdf', '_blank', 'noopener,noreferrer');};

  // Project URL mappings
  const projectUrls: { [key: string]: string } = {
    "Zingo Assist": "https://www.zingoassist.us/",
    "Alpha Medi Assist": "https://alphamediassist.com/",
    "Learn with Alpha": "https://learnwithalpha.com/",
    "Alpha Ahead Real Estate Brokerage": "https://alphaahead.estate/",
    "Alpha Ahead": "/home" // or whatever URL for Alpha Ahead
  };

  const isMobile = windowDimensions.width < 768;
  const isTablet = windowDimensions.width >= 768 && windowDimensions.width < 1024;
  const responsive: R = (() => {
    const w = windowDimensions.width;
          if (w < 480)
        return {
          heading: { fontSize: "1.2rem" },
          paddingX: "1rem",
          flexDirection: "column",
          buttons: {
            flexDirection: "column",
            gap: "0.75rem",
            alignItems: "stretch",
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "1.5rem",
            width: "100%"
          },
          heroText: { padding: "2rem 1rem", textAlign: "left" },
          sectionHeight: "auto",
          heroContent: { maxWidth: "100%" }
        };
      if (w < 768)
        return {
          heading: { fontSize: "1.4rem" },
          paddingX: "1.5rem",
          flexDirection: "column",
          buttons: {
            flexDirection: "column",
            gap: "1rem",
            alignItems: "stretch",
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "1.5rem",
            width: "100%"
          },
          heroText: { padding: "3rem 1.5rem", textAlign: "left" },
          sectionHeight: "auto",
          heroContent: { maxWidth: "100%" }
        };
    if (w < 1024)
      return {
        heading: { fontSize: "1.8rem" },
        paddingX: "2rem",
        flexDirection: "row",
        buttons: {
          flexDirection: "row",
          gap: "1.5rem",
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "1rem",
        },
        heroText: { padding: "3rem 2rem", textAlign: "left" },
        sectionHeight: "90vh",
        heroContent: { maxWidth: "600px" }
      };
    if (w < 1440)
      return {
        heading: { fontSize: "2rem" },
        paddingX: "3rem",
        flexDirection: "row",
        buttons: {
          flexDirection: "row",
          gap: "2rem",
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "1rem",
        },
        heroText: { padding: "4rem 3rem", textAlign: "left" },
        sectionHeight: "85vh",
        heroContent: { maxWidth: "650px" }
      };
    return {
      heading: { fontSize: "2.2rem" },
      paddingX: "4rem",
      flexDirection: "row",
      buttons: {
        flexDirection: "row",
        gap: "2rem",
        display: "flex",
        justifyContent: "flex-start",
        marginTop: "1rem",
      },
      heroText: { padding: "5rem 4rem", textAlign: "left" },
      sectionHeight: "85vh",
      heroContent: { maxWidth: "700px" }
    };
  })();

  // Ensure button labels are single-line and without embedded <br/> HTML
  const buttonWorkLabel = t('hero.buttonWork')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const buttonTalkLabel = t('hero.buttonTalk')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();


  useEffect(() => {
    const computeHeaderHeight = () => {
      const header = document.querySelector('header');
      const h = header instanceof HTMLElement ? header.offsetHeight : 0;
      setHeaderHeight(h);
    };

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
      computeHeaderHeight();
    };

    computeHeaderHeight();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    Array.from(document.styleSheets).forEach((s) => {
      try {
        if (!s.href || s.href.startsWith(window.location.origin)) {
          s.insertRule(
            "@keyframes scrollLeft{0%{transform:translateX(100%)}100%{transform:translateX(-100%)}}",
            s.cssRules.length
          );
          s.insertRule(
            "@keyframes scrollRight{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}",
            s.cssRules.length
          );
          s.insertRule(
            "@keyframes fadeUp{0%{opacity:0;transform:translateY(40px)}100%{opacity:1;transform:translateY(0)}}",
            s.cssRules.length
          );
        }
      } catch { }
    });
  }, []);
  type R = {
    heading: React.CSSProperties;
    paddingX: string;
    flexDirection: "row" | "column";
    buttons: React.CSSProperties;
    heroText: React.CSSProperties;
    sectionHeight: string;
    heroContent: React.CSSProperties;
  };

  return (
    <>
     
      <section
        style={{
          backgroundImage: 'url("/homebackground.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "black",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: responsive.paddingX,
          flexDirection: responsive.flexDirection,
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1,
          minHeight: windowDimensions.width < 768 ? "auto" : Math.max(520, windowDimensions.height - headerHeight),
          width: "100%",
        }}
      >
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(255,255,255,0.85) 35%, rgba(255,255,255,0.85) 100%)",
          zIndex: 0
        }} />
        <div style={{ 
          flex: "0 1 auto", 
          minWidth: windowDimensions.width < 768 ? "100%" : 300, 
          ...responsive.heroText,
          ...responsive.heroContent,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: windowDimensions.width < 768 ? "stretch" : "flex-start",
          position: "relative",
          zIndex: 2
        }}>
          <h5 style={{ 
            color: "#DC520E", 
            marginTop: windowDimensions.width < 768 ? "2rem" : "4rem",
            marginBottom: "1rem", 
            fontSize: windowDimensions.width < 768 ? "0.9rem" : "1.1rem",
            fontWeight: 600,
            letterSpacing: "0.5px",
            textAlign: "left"
          }}>{t("hero.tagline")}</h5>
                      <h2
              style={{
                ...responsive.heading,
                fontWeight: 700,
                borderLeft: "3px solid #1a3e6e",
                paddingLeft: "0.75rem",
                marginBottom: "1rem",
                color: "#333",
                animation: "fadeUp 1.2s ease-out forwards",
                lineHeight: 1.3,
                letterSpacing: "-0.5px",
                textAlign: "left"
              }}
            >
              {t("hero.headline").split('<br />').map((line: string, index: number, array: string[]) => (
                <React.Fragment key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
                      <p style={{ 
              lineHeight: 1.6, 
              marginBottom: "1rem",
              fontSize: windowDimensions.width < 768 ? "0.95rem" : "1.1rem",
              color: "#555",
              maxWidth: windowDimensions.width < 768 ? "100%" : "600px",
              textAlign: "left"
            }}>{t("hero.subtext")}</p>
          <div style={responsive.buttons}>
                <button
              onClick={openPortfolio}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#e2e2e2')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = '#d1c9c9')}
              style={{
                background: '#d1c9c9',
                color: '#000',
                padding: windowDimensions.width < 768 ? '0.4rem 0.8rem' : '0.75rem 1.25rem',
                border: 'none',
                borderRadius: 6,
                fontSize: windowDimensions.width < 768 ? '0.75rem' : '0.95rem',
                fontWeight: 500,
                boxShadow: '0 2px 10px rgba(0,0,0,.06)',
                cursor: 'pointer',
                width: windowDimensions.width < 768 ? 'auto' : 'auto',
                minWidth: windowDimensions.width < 768 ? 80 : 140,
                maxWidth: windowDimensions.width < 768 ? 150 : 'none',
                transition: 'all .3s',
                whiteSpace: 'nowrap'
              }}
            >
              {buttonWorkLabel}
            </button>
            <button
              onClick={() => navigate('/contact')}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#F1903F")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#DC520E")}
              style={{
                background: "#DC520E",
                color: "#fff",
                padding: windowDimensions.width < 768 ? '0.4rem 0.8rem' : '0.75rem 1.25rem',
                border: "none",
                borderRadius: 6,
                fontSize: windowDimensions.width < 768 ? '0.75rem' : '0.95rem',
                fontWeight: 500,
                cursor: "pointer",
                width: windowDimensions.width < 768 ? 'auto' : 'auto',
                minWidth: windowDimensions.width < 768 ? 100 : 160,
                maxWidth: windowDimensions.width < 768 ? 180 : 'none',
                transition: "all .3s",
                textAlign: "center",
                lineHeight: 1.3,
                whiteSpace: 'nowrap'
              }}
            >
              {buttonTalkLabel}
            </button>
          </div>
        </div>
      </section>
      <section style={{ background: "#f8f9fa", padding: "5rem 2rem" }}>
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          maxWidth: 1200, 
          margin: "0 auto", 
          alignItems: "center", 
          justifyContent: "space-between", 
          gap: "3rem",
          padding: "0 1rem"
        }}>
          <div style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}>
            <img src="/about-team.png" alt="about-team" style={{ 
              width: "100%", 
              maxWidth: 500, 
              borderRadius: 16, 
              boxShadow: "0 12px 40px rgba(0,0,0,.15)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }} />
          </div>
          <div style={{ flex: "1 1 500px", maxWidth: 600 }}>
            <p style={{ 
              color: "#DC520E", 
              fontWeight: 600, 
              marginBottom: "1rem", 
              fontSize: "1.1rem",
              letterSpacing: "0.5px"
            }}>{t("about.sectionLabel")}</p>
            <h2 style={{ 
              fontSize: "2.5rem", 
              fontWeight: 700, 
              borderLeft: "4px solid #1a3e6e", 
              paddingLeft: "1rem", 
              marginBottom: "1.5rem", 
              color: "#333",
              lineHeight: 1.3
            }}>{t("about.headline")}</h2>
            <p style={{ 
              lineHeight: 1.8, 
              marginBottom: "1.5rem", 
              fontSize: "1.1rem",
              color: "#555"
            }}>{t("about.para1")}</p>
            <p style={{ 
              lineHeight: 1.8, 
              marginBottom: "2rem", 
              fontSize: "1.1rem",
              color: "#555"
            }}>{t("about.para2")}</p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={openPortfolio}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e2e2e2")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#DC520E")}
                style={{ 
                  background: "#DC520E", 
                  color: "#fff", 
                  padding: "1rem 2rem", 
                  border: "none", 
                  borderRadius: 10, 
                  fontSize: "1rem", 
                  fontWeight: 500, 
                  boxShadow: "0 4px 15px rgba(220,82,14,.3)", 
                  cursor: "pointer", 
                  minWidth: 160, 
                  transition: "all .3s",
                  transform: "translateY(0)"
                }}
              >
                {t("about.cta")}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "#DC520E", color: "#fff", padding: "5rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1rem" }}>
        <h2 style={{ 
          fontSize: "2.8rem", 
          fontWeight: 700, 
          marginBottom: "4rem", 
          borderBottom: "3px solid #fff", 
          display: "inline-block", 
          paddingBottom: "1rem",
          lineHeight: 1.3
        }}>{t("industries.headline")}</h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '.3rem'
          }}
        >
          {industryCards.map((item, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                color: '#333',
                padding: '2rem 1.5rem 1.5rem',
                borderRadius: 20,
                maxWidth: 180,
                flex: '1 1 240px',
                boxShadow: '0 10px 24px rgba(0,0,0,.1)',
                textAlign: 'left',
                position: 'relative',
                marginTop: 60,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: -60,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  zIndex: 2,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    maxWidth: 180,
                    height: 140,
                    objectFit: 'cover',
                    borderRadius: 12,
                    boxShadow: '0 8px 16px rgba(0,0,0,.2)',
                  }}
                />
              </div>
              <div style={{ marginTop: 100 }}>
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    color: '#052647',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>{item.desc}</p>
                <a
                  href="/services"
                  style={{ color: '#DC520E', textDecoration: 'none', fontWeight: 500 }}
                >
                  {t('industries.more')}
                </a>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>





      {/* Sliding Project Logos Section */}
      <section style={{ background: "#ffffff", padding: isMobile ? "2rem 1rem" : isTablet ? "2.5rem 1.5rem" : "3rem 2rem", overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1rem" }}>
          {/* First Row */}
          <div style={{ 
            display: "flex", 
            gap: isMobile ? "1.5rem" : isTablet ? "2rem" : "3rem", 
            animation: "scrollLeft 25s linear infinite", 
            whiteSpace: "nowrap",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: isMobile ? "0.5rem" : "1rem"
          }}>
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project1.png") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project2.png") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project3.png") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/project4.jpg") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project5.png") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project6.png") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project7.png") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project8.png") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project9.jpg") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />

          </div>

          {/* Second Row - Projects 6, 8, 10, 11, 12 */}
          <div style={{ 
            display: "flex", 
            gap: isMobile ? "1.5rem" : isTablet ? "2rem" : "3rem", 
            animation: "scrollRight 25s linear infinite", 
            whiteSpace: "nowrap",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project6.png") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project8.png") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project10.jpg") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project11.jpg") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project12.png") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            {/* Duplicate for continuous effect */}
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project6.png") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project8.png") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project10.jpg") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project11.jpg") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project12.png") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            {/* Duplicate for continuous effect */}
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project6.png") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project8.png") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project10.jpg") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project11.jpg") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
            <div style={{
              width: isMobile ? '120px' : isTablet ? '150px' : '180px',
              height: isMobile ? '80px' : isTablet ? '100px' : '120px',
              background: 'url("/Project/Project12.png") center/contain no-repeat',
              backgroundSize: 'contain',
              flexShrink: 0
            }} />
          </div>
        </div>
      </section>

      {/* See Our Work Section */}
      <section style={{ background: "#f8f9fa", padding: "5rem 0", overflow: "hidden", position: "relative", width: "100%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ 
              fontSize: "2.8rem", 
              fontWeight: 700, 
              lineHeight: 1.3,
              color: "#DC520E",
              marginBottom: "1rem"
            }}>
              {t("seeOurWork.headline")}
            </h2>
            <p style={{ 
              fontSize: "1.2rem", 
              color: "#666", 
              maxWidth: 800, 
              margin: "0 auto", 
              marginTop: "1rem" 
            }}>
              {t("seeOurWork.subtitle")}
            </p>
          </div>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: "2rem",
            marginBottom: "3rem",
            justifyContent: "center",
            alignItems: "center"
            }}>
              {(t("seeOurWork.clients", { returnObjects: true }) as any[]).map((client, i) => (
                <div
                  key={i}
                  style={{
                    background: '#fff',
                    borderRadius: 16,
                    boxShadow: '0 8px 25px rgba(0,0,0,.08)',
                    border: '1px solid #f0f0f0',
                    display: 'flex',
                    flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,.08)';
                  }}
                onClick={() => navigate('/clients')}
              >
                <div style={{
                  width: '100%',
                  height: '180px',
                  background: `url(${client.image}) center/cover no-repeat`,
                  backgroundColor: '#f8f9fa',
                  borderBottom: '1px solid #f0f0f0',
                  position: 'relative'
                }} />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: 700, 
                    marginBottom: '0.5rem', 
                    color: '#333',
                    lineHeight: 1.2
                  }}>{client.name}</h3>
                  <p style={{ 
                    marginBottom: '1rem', 
                    color: '#DC520E', 
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>{client.category}</p>
                  <div style={{ 
                    color: '#DC520E', 
                    textDecoration: 'none', 
                    fontWeight: 600, 
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    {t("seeOurWork.viewDetails")}
                  </div>
                </div>
                </div>
              ))}
            </div>

          <div style={{ textAlign: "center", marginTop: "3rem", padding: "1rem 0" }}>
            <button
              onClick={() => navigate('/clients')}
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
                minWidth: '200px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#b8440b';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#DC520E';
              }}
            >
              {t("seeOurWork.viewAll")}
            </button>
          </div>
        </div>
      </section>



      {/* Moving Project Cards Section - At the End */}
      <section style={{ background: "#f8f9fa", padding: "5rem 0", overflow: "hidden", position: "relative", width: "100%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ 
            fontSize: "2.8rem", 
            fontWeight: 700, 
            marginBottom: "1rem", 
            color: "#DC520E",
              lineHeight: 1.3,
              textAlign: "center"
          }}>
            {t("projects.headline")}
          </h2>

          </div>
          
          {/* Moving Project Cards */}
          <div style={{ 
            display: "inline-flex", 
            gap: "2rem", 
            animation: "scrollLeft 30s linear infinite", 
            whiteSpace: "nowrap",
            padding: "2rem 0",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            overflow: "visible"
          }}>
            {projectCards.map((project, index) => {
              const projectUrl = projectUrls[project.title] || '/projects';
              const isExternalUrl = projectUrl.startsWith('http');
              
              return (
              <div
                key={index}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 8px 25px rgba(0,0,0,.08)',
                  border: '1px solid #f0f0f0',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  minWidth: isMobile ? '280px' : isTablet ? '320px' : '300px',
                  maxWidth: isMobile ? '280px' : isTablet ? '320px' : '300px',
                  height: isMobile ? '400px' : isTablet ? '420px' : '450px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,.08)';
                }}
              >
                <div style={{
                  width: '100%',
                  height: '180px',
                  background: `url(${project.image}) center/cover no-repeat`,
                  backgroundColor: '#f8f9fa',
                  borderBottom: '1px solid #f0f0f0',
                  position: 'relative'
                }} />
                <div style={{ 
                  padding: isMobile ? '1rem' : '1.5rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: isMobile ? '180px' : isTablet ? '200px' : '220px'
                }}>
                  <div>
                  <h3 style={{
                      fontSize: isMobile ? '1rem' : isTablet ? '1.1rem' : '1.2rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    color: '#333',
                    lineHeight: 1.2
                  }}>{project.title}</h3>
                  <p style={{
                    color: '#DC520E',
                    fontSize: isMobile ? '0.75rem' : isTablet ? '0.8rem' : '0.85rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '0.5rem'
                  }}>{project.tagline}</p>
                  <p style={{
                    fontSize: isMobile ? '0.8rem' : isTablet ? '0.85rem' : '0.9rem',
                    lineHeight: 1.5,
                    color: '#666',
                    marginBottom: '1rem'
                  }}>{project.desc}</p>
                  <div 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isExternalUrl) {
                        window.open(projectUrl, '_blank', 'noopener,noreferrer');
                      } else {
                        navigate(projectUrl);
                      }
                    }}
                    style={{
                      color: '#DC520E',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#b8440b';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#DC520E';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {t("projects.learnMore")}
                  </div>
                  </div>
                </div>
              </div>
            );
            })}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem", padding: "1rem 0" }}>
            <button
              onClick={() => navigate('/projects')}
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
                minWidth: '200px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#b8440b';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#DC520E';
              }}
            >
              {t("projects.viewAll")}
            </button>
          </div>
        </div>
      </section>

    </>
  );
};

export default HeroSection;