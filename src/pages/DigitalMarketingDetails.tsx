import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DigitalMarketingDetails: React.FC = () => {
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
            Digital Marketing Services
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
            In today's fast-paced digital world, establishing an influential online presence isn't just an option—it's essential.
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
              Alpha Ahead LLC is here to guide the journey with our bespoke digital marketing services, tailored to meet your unique business needs. As your trusted digital marketing agency, we're committed to delivering strategies that are not just impactful, but measurable. Let us help you climb the ladder to online success with expert digital marketing services designed to increase visibility, drive significant traffic, and boost your conversions seamlessly.
            </p>
          </div>

          {/* Tailored Digital Marketing Services */}
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
              Tailored Digital Marketing Services for Your Success
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              Alpha Ahead LLC takes pride in offering a comprehensive suite of digital marketing services crafted with precision for small to medium businesses, startups, eCommerce companies, enterprises, and agencies in need of white-label solutions. Our approaches are rooted in thorough data analysis and strategic planning, ensuring that every campaign brings tangible results.
            </p>
          </div>

          {/* What We Offer */}
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
              What We Offer
            </h3>

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
                  Search Engine Optimization (SEO)
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Enhance your online visibility with SEO techniques that get your websites ranking at the top of search results. Our strategies improve your search engine presence, attracting more organic traffic and potential customers.
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
                  Pay-Per-Click (PPC) Advertising
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Get immediate results and high returns on investment with our PPC services. We'll help you create targeted ads that reach your desired audience and convert clicks into actual customers.
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
                  Social Media Marketing & Management
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Engage your audience with compelling content and campaigns across various social media platforms. We'll also manage your accounts, ensuring your brand voice resonates with followers and converts them into loyal customers.
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
                  Content Marketing & Strategy
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Content is the backbone of digital marketing. Our team crafts compelling, SEO-optimized content that engages, informs, and converts your target audience, solidifying your brand as a leader in your niche.
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
                  Email Marketing Campaigns
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Develop lasting relationships with your customers through targeted and personalized email marketing campaigns. We craft strategies that increase engagement, retention, and conversions.
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
                  Conversion Rate Optimization
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Increase the efficacy of your marketing efforts by transforming visitors into customers. We'll analyze your website and implement changes that optimize user experience and increase conversion rates.
                </p>
              </div>

              <div style={{
                background: '#f7fafc',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #e2e8f0',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                gridColumn: isMobile ? '1' : isTablet ? '1' : '1 / -1'
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
                  Analytics & Performance Tracking
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Stay informed with detailed analytics that track your campaigns' performance. We'll provide you with clear insights, helping you make informed decisions to continually refine and improve your strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits of Partnering with Alpha Ahead */}
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
              Benefits of Partnering with Alpha Ahead
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              Choosing Alpha Ahead means stepping ahead in the crowded digital marketplace. Our commitment is to help you establish a robust, reliable online presence that consistently drives growth and success.
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
                  Professional Website Establishment
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  Your website is often a customer's first impression of your business. We ensure it's a lasting one with professional, SEO-ready websites designed to impress and convert.
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
                  Enhanced User Experience
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  Transform visitor interactions through responsive and intuitive interfaces, offering seamless navigation that enhances engagement and reduces bounce rates.
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
                  Resource and Time Efficiency
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  With Alpha Ahead's reliable marketing services, save valuable time and resources, allowing you to focus on core business activities while we handle the intricacies of digital marketing.
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
                  Competitive Edge
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  Our custom solutions are tailored to your specific business needs, delivering a competitive advantage that helps you stand out in your industry.
                </p>
              </div>
            </div>
          </div>

          {/* Who Can Benefit */}
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
              Who Can Benefit?
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              Our digital marketing company caters to a diverse array of clients, ensuring each gets the tailored service they deserve:
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
                  Small and Medium Businesses
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Ready to scale online? Our digital marketing strategies will help you gain the traction needed to grow in the digital space.
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
                  Startups
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Establishing a strong digital presence is crucial for new businesses. We equip startups with the strategies needed to make a bold entrance into the online market.
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
                  eCommerce Companies
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Drive traffic and increase sales with digital strategies designed for maximum impact, reaching your target audience effectively.
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
                  Enterprises
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Seeking full-service digital marketing services? Alpha Ahead provides comprehensive solutions that integrate seamlessly with your existing processes.
                </p>
              </div>

              <div style={{
                background: '#f7fafc',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #e2e8f0',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                gridColumn: isMobile ? '1' : isTablet ? '1' : '1 / -1'
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
                  Agencies and Partners
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Need white-label marketing services? We offer reliable and effective solutions that agencies can represent as their own, delivering outstanding results to their clients.
                </p>
              </div>
            </div>
          </div>

          {/* Our Promise */}
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
              Our Promise: Measurable, Results-Driven Success
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              At Alpha Ahead, we don't just talk about results; we deliver them. Our data-backed strategies ensure your digital marketing efforts translate into real-world success. The transparency of our analytics and performance tracking means you'll always understand the impact of our work.
            </p>
          </div>

          {/* Let's Take Your Business to the Next Level */}
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
              Let's Take Your Business to the Next Level
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              Unleash your business's potential with Alpha Ahead's digital marketing services. We're more than a digital marketing agency—we're your partner in growth, focused on making your business thrive in the digital landscape. With tailored marketing services designed to fit your needs, future success is just a strategy away.
            </p>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              Ready to drive growth and achieve your digital marketing goals? Let's make it happen! Contact Alpha Ahead LLC today to schedule your free consultation and discover how our digital marketing services can transform your online presence.
            </p>
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
              Ready to Transform Your Digital Presence?
            </h3>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: 1.6,
              marginBottom: '2rem',
              opacity: 0.95
            }}>
              Partner with Alpha Ahead LLC and discover the power of strategic digital marketing that drives real results.
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

export default DigitalMarketingDetails;
