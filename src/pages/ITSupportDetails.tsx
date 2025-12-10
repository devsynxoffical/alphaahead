import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ITSupportDetails: React.FC = () => {
  const navigate = useNavigate();
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

  const goBack = () => navigate('/services');

  return (
    <>
      {/* Hero Section */}
      <section style={{ 
        background: '#DC520E', 
        padding: '6rem 2rem 4rem', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          background: 'rgba(0,0,0,0.1)' 
        }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <button
            onClick={goBack}
            style={{
              position: 'absolute',
              top: '-2rem',
              left: '0',
              background: 'rgba(255,255,255,0.2)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.3)',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
            }}
          >
            ← Back to Services
          </button>
          
          <h1 style={{ 
            fontSize: headingFontSize, 
            fontWeight: 700, 
            color: '#fff', 
            marginBottom: '1.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            IT Support Service
          </h1>
          <h2 style={{ 
            fontSize: isMobile ? '1.2rem' : isTablet ? '1.5rem' : '1.8rem', 
            fontWeight: 600, 
            color: '#fff', 
            marginBottom: '2rem',
            opacity: 0.95,
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}>
            Alpha Ahead LLC
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: 1.6, 
            color: '#fff', 
            maxWidth: 800, 
            margin: '0 auto', 
            opacity: 0.9 
          }}>
            Discover Reliable IT Support with Alpha Ahead LLC
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ background: '#f8fafc', padding: paddingSection }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          
          {/* Introduction */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            marginBottom: '3rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              In today's fast-paced digital landscape, ensuring your business runs smoothly requires more than just basic technical acumen. As your trusted IT support partner, Alpha Ahead LLC is here to empower your business with cutting-edge IT support services that enhance efficiency, bolster security, and minimize downtime. Whether you're a small business craving dependable support, a startup needing scalable solutions, or a large enterprise facing complex IT challenges, Alpha Ahead is your go-to IT support company.
            </p>
          </div>

          {/* Tailored Business IT Support Solutions */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            marginBottom: '3rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2d3748',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span style={{
                width: '4px',
                height: '40px',
                background: '#DC520E',
                borderRadius: '2px'
              }} />
              Tailored Business IT Support Solutions
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              At Alpha Ahead LLC, our mission is to ensure your technology facilitates your growth rather than hinders it. We achieve this by crafting tailored business IT support services designed to meet your unique needs:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              <div style={{
                background: '#f7fafc',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #e2e8f0',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#2d3748',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#DC520E',
                    borderRadius: '50%'
                  }} />
                  Proactive Monitoring & Maintenance
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  We keep your systems running smoothly with continuous oversight and updates, so you can focus on what matters most—your business.
                </p>
              </div>

              <div style={{
                background: '#f7fafc',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #e2e8f0',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#2d3748',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#DC520E',
                    borderRadius: '50%'
                  }} />
                  Comprehensive Helpdesk Support
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Our team is always ready to resolve issues quickly, minimizing disruptions and maximizing productivity.
                </p>
              </div>
            </div>
          </div>

          {/* Network & Infrastructure Management */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            marginBottom: '3rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2d3748',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span style={{
                width: '4px',
                height: '40px',
                background: '#DC520E',
                borderRadius: '2px'
              }} />
              Network & Infrastructure Management You Can Count On
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              A secure and optimized network is the backbone of any successful business. Our network and infrastructure management services are designed to:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(3, 1fr)',
              gap: '2rem'
            }}>
              <div style={{
                background: '#DC520E',
                borderRadius: '12px',
                padding: '2rem',
                color: '#fff'
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#fff',
                    borderRadius: '50%'
                  }} />
                  Enhance Connectivity
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  Ensure seamless communication across your organization, facilitating smoother operations and collaboration.
                </p>
              </div>

              <div style={{
                background: '#DC520E',
                borderRadius: '12px',
                padding: '2rem',
                color: '#fff'
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#fff',
                    borderRadius: '50%'
                  }} />
                  Reliable Security Protocols
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  Protect your network from unauthorized access and vulnerabilities, safeguarding your sensitive business information.
                </p>
              </div>

              <div style={{
                background: '#DC520E',
                borderRadius: '12px',
                padding: '2rem',
                color: '#fff'
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#fff',
                    borderRadius: '50%'
                  }} />
                  Scalability & Optimization
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  Adapt to your business's growing demands with scalable solutions that optimize performance.
                </p>
              </div>
            </div>
          </div>

          {/* Cybersecurity Solutions */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            marginBottom: '3rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2d3748',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span style={{
                width: '4px',
                height: '40px',
                background: '#DC520E',
                borderRadius: '2px'
              }} />
              Fortify Your Defenses with Our Cybersecurity Solutions
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              In an era where cyber threats are evolving at lightning speed, safeguarding your business is more critical than ever. Alpha Ahead LLC offers top-notch cybersecurity solutions that ensure your sensitive data stays protected:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              <div style={{
                background: '#f7fafc',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #e2e8f0',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#2d3748',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#DC520E',
                    borderRadius: '50%'
                  }} />
                  Comprehensive Protection
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Guard against data breaches and cyber threats with robust security measures tailored to your business needs.
                </p>
              </div>

              <div style={{
                background: '#f7fafc',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #e2e8f0',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#2d3748',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#DC520E',
                    borderRadius: '50%'
                  }} />
                  Continuous Monitoring
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Stay one step ahead with our 24/7 monitoring services, detecting threats before they become crises.
                </p>
              </div>
            </div>
          </div>

          {/* Cloud Support Services */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            marginBottom: '3rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2d3748',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span style={{
                width: '4px',
                height: '40px',
                background: '#DC520E',
                borderRadius: '2px'
              }} />
              Elevate Your Workflow with Cloud Support Services
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              Leverage the power of the cloud with Alpha Ahead's expert cloud support services. We streamline your operations by providing:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              <div style={{
                background: '#DC520E',
                borderRadius: '12px',
                padding: '2rem',
                color: '#fff'
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#fff',
                    borderRadius: '50%'
                  }} />
                  Seamless Migration & Integration
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  Transition to the cloud smoothly and integrate your services seamlessly for enhanced efficiency.
                </p>
              </div>

              <div style={{
                background: '#DC520E',
                borderRadius: '12px',
                padding: '2rem',
                color: '#fff'
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#fff',
                    borderRadius: '50%'
                  }} />
                  Ongoing Cloud Management
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  Benefit from continuous support and cloud optimization tailored to your business's evolving needs.
                </p>
              </div>
            </div>
          </div>

          {/* Remote & Onsite IT Support */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            marginBottom: '3rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2d3748',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span style={{
                width: '4px',
                height: '40px',
                background: '#DC520E',
                borderRadius: '2px'
              }} />
              Quick Resolutions with Remote & Onsite IT Support
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              At Alpha Ahead LLC, we understand that technical issues can arise at any time. That's why we offer fast, reliable remote and onsite IT support to tackle issues as they come:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              <div style={{
                background: '#f7fafc',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #e2e8f0',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#2d3748',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#DC520E',
                    borderRadius: '50%'
                  }} />
                  Anywhere, Anytime Service
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Whether you need help remotely or require onsite assistance, our dedicated team responds swiftly to get your systems back on track.
                </p>
              </div>

              <div style={{
                background: '#f7fafc',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #e2e8f0',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#2d3748',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#DC520E',
                    borderRadius: '50%'
                  }} />
                  Reduced Downtime
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Quick resolutions mean less time waiting and more time moving forward with your operations.
                </p>
              </div>
            </div>
          </div>

          {/* Data Backup & Recovery */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            marginBottom: '3rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2d3748',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span style={{
                width: '4px',
                height: '40px',
                background: '#DC520E',
                borderRadius: '2px'
              }} />
              Ensure Business Continuity with Data Backup & Recovery
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              Data is the lifeblood of modern businesses. Alpha Ahead's data backup and recovery services ensure that you never lose essential information:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              <div style={{
                background: '#DC520E',
                borderRadius: '12px',
                padding: '2rem',
                color: '#fff'
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#fff',
                    borderRadius: '50%'
                  }} />
                  Robust Disaster Recovery
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  Protect against unexpected data losses with reliable backup solutions.
                </p>
              </div>

              <div style={{
                background: '#DC520E',
                borderRadius: '12px',
                padding: '2rem',
                color: '#fff'
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#fff',
                    borderRadius: '50%'
                  }} />
                  Smooth Restoration Processes
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  Minimize downtime by quickly restoring your data and maintaining business continuity.
                </p>
              </div>
            </div>
          </div>

          {/* IT Consulting & Strategy */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            marginBottom: '3rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2d3748',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span style={{
                width: '4px',
                height: '40px',
                background: '#DC520E',
                borderRadius: '2px'
              }} />
              Strategic Advantage with IT Consulting & Strategy
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              Let's align technology with your business goals through our consulting and strategy services. Allow us to drive innovation and growth by:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              <div style={{
                background: '#f7fafc',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #e2e8f0',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#2d3748',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#DC520E',
                    borderRadius: '50%'
                  }} />
                  Tailored IT Strategies
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Develop a roadmap that aligns your technological capabilities with your business objectives.
                </p>
              </div>

              <div style={{
                background: '#f7fafc',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #e2e8f0',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#2d3748',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#DC520E',
                    borderRadius: '50%'
                  }} />
                  Expert Guidance
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Leverage our expert knowledge to make informed decisions that propel your business forward.
                </p>
              </div>
            </div>
          </div>

          {/* Client Testimonial */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            marginBottom: '3rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2d3748',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Hear What Our Clients Say
            </h3>
            <div style={{
              background: '#f7fafc',
              borderRadius: '12px',
              padding: '2rem',
              border: '1px solid #e2e8f0',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              textAlign: 'center'
            }}>
              "Partnering with Alpha Ahead was the best decision we made for our IT needs. Their proactive approach keeps us ahead of potential issues, and their support has been unwavering. The peace of mind they provide allows us to focus on our core operations, and our productivity has never been better."
            </div>
          </div>

          {/* Ready to Elevate Your Business IT Services */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            marginBottom: '3rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#2d3748',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span style={{
                width: '4px',
                height: '40px',
                background: '#DC520E',
                borderRadius: '2px'
              }} />
              Ready to Elevate Your Business IT Services?
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              With Alpha Ahead LLC, you're not just getting an IT support service; you're investing in a partnership dedicated to your success. Here's what you can expect:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              <div style={{
                background: '#DC520E',
                borderRadius: '12px',
                padding: '2rem',
                color: '#fff'
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#fff',
                    borderRadius: '50%'
                  }} />
                  Reduced Downtime
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  Experience fewer disruptions and greater operational efficiency with our 24/7 support.
                </p>
              </div>

              <div style={{
                background: '#DC520E',
                borderRadius: '12px',
                padding: '2rem',
                color: '#fff'
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#fff',
                    borderRadius: '50%'
                  }} />
                  Stronger Security
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  Protect your sensitive data and fortify your defenses against cyber threats.
                </p>
              </div>

              <div style={{
                background: '#DC520E',
                borderRadius: '12px',
                padding: '2rem',
                color: '#fff'
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#fff',
                    borderRadius: '50%'
                  }} />
                  Improved Productivity
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  Benefit from seamless technology operations that free up your time and resources.
                </p>
              </div>

              <div style={{
                background: '#DC520E',
                borderRadius: '12px',
                padding: '2rem',
                color: '#fff'
              }}>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#fff',
                    borderRadius: '50%'
                  }} />
                  Cost Savings
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  Enjoy scalable IT solutions that adapt as your business grows, optimized for both functionality and budget.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{
            background: '#DC520E',
            borderRadius: '16px',
            padding: '4rem 3rem',
            textAlign: 'center',
            color: '#fff',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '1.5rem'
            }}>
              Ready to Transform Your IT Infrastructure?
            </h3>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: 1.6,
              marginBottom: '2rem',
              opacity: 0.95
            }}>
              Discover the difference a dedicated IT support company can make for your organization. Let's forge a path to success together.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button
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
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                }}
              >
                Contact Us Today
              </button>
              <button
                onClick={goBack}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  color: '#fff',
                  padding: '1rem 2rem',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                }}
              >
                View All Services
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ITSupportDetails;
