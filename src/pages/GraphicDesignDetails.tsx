import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GraphicDesignDetails: React.FC = () => {
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
            Graphic Design Services
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
            Elevate Your Brand with Alpha Ahead LLC's Graphic Design Services
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
              In today's visually-driven world, having a compelling brand identity is more crucial than ever. Alpha Ahead LLC is here to help you navigate the complexities of design with our professional graphic design services. We transform creative concepts into powerful visual messages that captivate audiences and elevate your brand's presence. From intricate graphic illustration to all-encompassing custom graphic design services, our team delivers visually striking solutions tailored to your unique needs—be it for the web or print.
            </p>
          </div>

          {/* Why Choose Alpha Ahead LLC */}
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
              Why Choose Alpha Ahead LLC for Your Graphic Designing Needs?
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              With a myriad of graphic design services available, picking the right partner can be daunting. Here's why Alpha Ahead LLC stands out:
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
                  Custom Graphic Design
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Our focus is on delivering unique, brand-focused designs that specifically align with your vision and goals. Whether it's creating logos, business cards, or comprehensive corporate identity kits, each piece is crafted with your brand's personality at its core.
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
                  Unlimited Graphic Design Service
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Creativity doesn't have to be limited. With our flexible design requests, enjoy the freedom to request as many revisions as you need, with a commitment to fast turnaround times.
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
                  Graphic Illustration
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Tap into a wealth of creative artwork for marketing, branding, and storytelling. Our illustrations are designed to turn heads and engage minds, making your message both memorable and impactful.
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
                  Online Graphic Design Services
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  In the fast-paced digital world, quick and professional solutions are key. Our online graphic design services ensure that your digital content stands out with ease, from social media graphics to web banner designs.
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
                  Print Design Services
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Whether it's sleek brochures, eye-catching flyers, or sophisticated packaging, our print design services create high-quality, tangible materials that leave a lasting impression.
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
                  Graphic Design Printing
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  We take your ideas from concept to reality, providing high-quality print-ready files with professional finishes that showcase every detail at its best.
                </p>
              </div>
            </div>
          </div>

          {/* Build a Strong and Consistent Brand Identity */}
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
              Build a Strong and Consistent Brand Identity
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              Your brand is more than just a logo—it's the story you tell and the promise you make to your customers. With Alpha Ahead LLC, you can build a strong and consistent brand identity that resonates with your audience. Our expertise in branding solutions, including developing logos and creating cohesive social media graphics, ensures your brand is both distinctive and cohesive across all platforms.
            </p>
          </div>

          {/* Benefits Section */}
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
              Key Benefits of Our Graphic Design Services
            </h3>

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
                  Save Costs with Unlimited Graphic Design Options
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  Budget constraints shouldn't hamper creativity. With our unlimited graphic design service, you'll have the flexibility to explore multiple design options without incurring significant extra costs. This allows startups, small and medium businesses, and marketing teams to experiment and refine their ideas until they achieve the perfect outcome.
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
                  Engage Audiences with Creative, High-Quality Visuals
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  In an age where attention spans are short, capturing your audience's attention quickly is vital. Our team crafts engaging visuals that not only capture interest but also communicate your message clearly and effectively. Whether for product launches or seasonal promotions, our designs are tailored to connect with viewers on an emotional level, driving engagement and boosting your marketing impact.
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
                  Speed Up Campaigns with Quick Delivery and Ongoing Support
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  When timelines are tight, you need a design partner that can deliver. Our commitment to quick delivery ensures your campaigns never miss a beat. Plus, with ongoing support, you'll have the assurance of a reliable team ready to tackle your next project, whether it's for digital or print needs.
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
                  Enhance Marketing Impact with Professional Graphic Design Printing
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  The difference between a good campaign and a great one often lies in the details. Our graphic design printing services provide the finish your designs deserve. Experience the quality of high-resolution print-ready files, perfect for any professional application from business presentations to high-profile public displays.
                </p>
              </div>
            </div>
          </div>

          {/* Who Benefits from Our Services */}
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
              Who Benefits from Our Services?
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              Our graphic design services cater to a variety of customers, each with unique needs, including:
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
                  Startups
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Transform your new business with complete branding packages that set you apart from competitors.
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
                  Small and Medium Businesses
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Gain continuous design support to keep up with growing demands.
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
                  Marketing Teams and Agencies
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Benefit from outsourcing graphic design services, freeing up internal resources and capitalizing on professional expertise.
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
                  eCommerce Brands
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Enhance your product visuals and social media presence with creative, eye-catching graphics.
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
                  Corporates
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Improve communication with expert print design services like flyers, brochures, and packaging.
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
                  Entrepreneurs
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Stand out with custom graphic design for logos and personal brands that reflect your distinctive identity.
                </p>
              </div>
            </div>
          </div>

          {/* Ready to take your brand to the next level */}
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
              Ready to Take Your Brand to the Next Level?
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              Let Alpha Ahead LLC be your partner in creating dynamic, inspiring visual experiences. Discover how our graphic designing solutions can help forge connections with your audience, propelling your brand to new heights.
            </p>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              Join scores of satisfied clients who trust Alpha Ahead LLC to deliver top-notch graphic designs. Get in touch today to discuss your specific needs and see firsthand how our services can transform your brand. Together, we'll build a powerful visual identity that speaks volumes.
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
              Ready to Transform Your Brand?
            </h3>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: 1.6,
              marginBottom: '2rem',
              opacity: 0.95
            }}>
              Would you like to discuss your project with us? Reach out today and let's start crafting beautiful, impactful designs that make your brand shine.
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

export default GraphicDesignDetails;
