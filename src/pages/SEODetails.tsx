import React, { useEffect, useState } from 'react';
import { initialWidth } from '../utils/hydration';
import ServiceSummary from '../components/seo/ServiceSummary';
import { useNavigate } from 'react-router-dom';

const SEODetails: React.FC = () => {
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

  const goBack = () => navigate('/services');

  return (
    <>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(120deg, #0f1f3a 0%, #18305a 100%)', 
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
            fontSize: 'clamp(1.5rem, 1rem + 1.8vw, 3rem)', 
            fontWeight: 700, 
            color: '#fff', 
            marginBottom: '1.5rem',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            SEO Agency Services
          </h1>
          <h2 style={{ 
            fontSize: 'clamp(1.2rem, 0.95rem + 1vw, 1.8rem)', 
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
            In today's digital world, standing out online isn't just beneficial; it's essential. With countless businesses competing for attention, making sure your brand is visible to your target audience can make all the difference.
          </p>
        </div>
      </section>

      <ServiceSummary />

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
              This is where Alpha Ahead LLC, a trusted and results-driven SEO agency, steps in to take your brand to new heights. Our specialized search engine optimization services are designed to elevate your visibility, drive qualified traffic, and greatly enhance your brand's presence on the web.
            </p>
          </div>

          {/* Why Choose */}
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
              Why Choose Alpha Ahead LLC for Your SEO Needs?
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              At Alpha Ahead LLC, we understand that SEO isn't just about climbing to the top of Google; it's about crafting a strategy that aligns with your business goals and adapts to the ever-evolving digital landscape. Our comprehensive suite of SEO services not only improves your online ranking but also works to increase conversions and foster solid growth.
            </p>
          </div>

          {/* SEO Services */}
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
              Our Comprehensive SEO Services
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
                  Tailored SEO Optimization Services
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  We know that one size doesn't fit all. Our SEO optimization services are finely tuned to your business's unique needs. From keyword research to on-page SEO, technical SEO, and content optimization, our approaches are tailored just for you.
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
                  High-Quality Link Building
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Increase your site's authority with strategies designed to build quality backlinks from reputable sources, enhancing your credibility and ranking in search results.
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
                  Local SEO Expertise
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Stand out in your local market. Whether you're a charming bakery in a bustling city or a local law firm aiming to expand its reach, we'll help you rank excellently within your geographical area.
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
                  Advanced Analytics and Reporting
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Keep track of your SEO performance with our advanced analytics and monthly performance reports. Understand your rankings, traffic, and conversions in a clear, actionable format.
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
                  Scalable Campaigns
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Whether you're a startup in need of affordable yet effective solutions or an enterprise looking for a large-scale strategy, our scalable SEO campaigns adjust to suit your size and aspirations.
                </p>
              </div>
            </div>
          </div>

          {/* The Alpha Ahead Approach */}
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
              The Alpha Ahead Approach: SEO Done Right
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
                  1. Understanding Your Market
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  We begin with a deep dive into your industry, competitors, and audience to create a strategy that targets the most effective keywords and content opportunities.
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
                  2. Customized Strategy Development
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  From there, our experienced team crafts a customized SEO strategy to optimize every aspect of your online presence, ensuring your site is fully optimized for search engines and user experience alike.
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
                  3. Implementing Proven Techniques
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  Utilizing white-hat SEO methods, we enhance your site's visibility and authority sustainably. This includes a mix of engaging content creation, technical adjustments, and strategic link-building.
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
                  4. Ongoing Evaluation and Adaptation
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  The digital realm is ever-changing, and so is our approach. We regularly evaluate your campaign's performance and make necessary adjustments to adapt to algorithm updates and market shifts.
                </p>
              </div>
            </div>
          </div>

          {/* SEO Benefits */}
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
              SEO Services That Deliver Real Benefits
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              {[
                { title: "Rank Higher on Search Engines", desc: "Secure top positions on search engine results pages for keywords that matter to you, increasing your reach and online credibility." },
                { title: "Drive Consistent Traffic", desc: "With targeted strategies, expect a steady increase in qualified leads visiting your site, leading to more business opportunities." },
                { title: "Boost Conversions", desc: "Transform visitors into customers with enhanced landing pages and a user experience designed to engage and persuade." },
                { title: "Gain a Competitive Edge", desc: "Leverage the insights and strategies from our expert team that are specifically tailored to give you an advantage over competitors." },
                { title: "Experience Sustainable Growth", desc: "Enjoy long-term benefits with our white-hat SEO practices designed to support steady business growth." }
              ].map((benefit, index) => (
                <div key={index} style={{
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
                    {benefit.title}
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: '#4a5568'
                  }}>
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Who Benefits */}
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
              Who Benefits from Our SEO Services?
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              {[
                { title: "Startups", desc: "Launch with strength using powerful SEO strategies that deliver results while respecting your budget constraints." },
                { title: "E-commerce Brands", desc: "Take your online sales to the next level with optimization tactics tailored for online stores." },
                { title: "Local Businesses", desc: "Dominate your area with targeted local SEO strategies that put your business front and center in your community." },
                { title: "Enterprises", desc: "Manage large-scale campaigns with an experienced search engine optimization company that understands the unique challenges and opportunities of enterprise-level SEO." }
              ].map((target, index) => (
                <div key={index} style={{
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
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#2d3748',
                    marginBottom: '1rem'
                  }}>
                    {target.title}
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: '#4a5568'
                  }}>
                    {target.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Trust */}
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
              Why Trust Alpha Ahead LLC?
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              As a leading SEO marketing company, our reputation is built on a foundation of trust, transparency, and proven results. We're passionate about helping businesses like yours thrive online. We pride ourselves on being more than just a service provider—we're your partners in growth.
            </p>
          </div>

          {/* Effective SEO Strategies */}
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
              Effective SEO Strategies for Lasting Success
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              {[
                { title: "Technical Audits", desc: "Align your website's functionality with SEO best practices to improve loading times, mobile responsiveness, and overall performance." },
                { title: "Content Optimization", desc: "Enhance every piece of content on your site with precise keyword integrations, relevant information, and engaging formats." },
                { title: "Link Building & Authority Development", desc: "Skyrocket your domain authority with strategic partnerships and content marketing." },
                { title: "Local SEO Focus", desc: "Capture local audiences effectively and improve your community presence." },
                { title: "Continuous Support and Training", desc: "Stay informed and empowered with training and support from an experienced team dedicated to your success." }
              ].map((strategy, index) => (
                <div key={index} style={{
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
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#2d3748',
                    marginBottom: '1rem'
                  }}>
                    {strategy.title}
                  </h4>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: 1.7,
                    color: '#4a5568'
                  }}>
                    {strategy.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Take the First Step */}
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
              Take the First Step Toward Enhanced Online Presence
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              Don't let your business get lost in the sea of online competition. With Alpha Ahead LLC, optimize your website for growth, visibility, and success.
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
              Ready to Transform Your SEO Game?
            </h3>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: 1.6,
              marginBottom: '2rem',
              opacity: 0.95
            }}>
              Partner with Alpha Ahead LLC today and discover the power of expert, tailored SEO services. Explore how we can elevate your brand to the heights it deserves. Reach out for a complimentary consultation and let's pave the path for your online success together.
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
            <p style={{
              fontSize: '1rem',
              opacity: 0.8,
              marginTop: '2rem',
              fontWeight: 600
            }}>
              Boost your online visibility & convert more today → Contact Us for expert SEO solutions!
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default SEODetails;
