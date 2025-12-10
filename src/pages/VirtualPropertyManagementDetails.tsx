import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VirtualPropertyManagementDetails: React.FC = () => {
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
            Virtual Property Management Services
          </h1>
          <h2 style={{ 
            fontSize: isMobile ? '1.2rem' : isTablet ? '1.5rem' : '1.8rem', 
            fontWeight: 600, 
            color: '#fff', 
            marginBottom: '2rem',
            opacity: 0.95,
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}>
            Simplify Your Real Estate Operations with Alpha Ahead LLC
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: 1.6, 
            color: '#fff', 
            maxWidth: 800, 
            margin: '0 auto', 
            opacity: 0.9 
          }}>
            Managing rental properties can be incredibly rewarding, but let's be honest—it can also be quite daunting. Whether you're juggling multiple properties as an independent landlord, expanding your portfolio as a real estate investor, or simply looking for efficient administrative support as a property management company, Alpha Ahead LLC is here to lend a helping hand.
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
              Our comprehensive Virtual Property Management Services are designed to tackle the daily grind, so you can focus on what you love most about real estate.
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
              Why Choose Virtual Property Management Services?
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              Owning and managing rental properties comes with its set of challenges, and that's where Alpha Ahead LLC's virtual property management comes in. By enlisting our team, you unlock a world of possibilities—greater efficiency, lower costs, and peace of mind. Our Virtual Property Management Services are tailored for:
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
              gap: '1.5rem'
            }}>
              {[
                'Independent Landlords managing multiple properties.',
                'Real Estate Investors seeking reliable support.',
                'Property Management Companies needing extra admin assistance.',
                'Realtors and Brokers offering rental management services.',
                'Short-term Rental Owners requiring continuous help.'
              ].map((item, index) => (
                <div key={index} style={{
                  background: '#f7fafc',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#DC520E',
                    borderRadius: '50%',
                    flexShrink: 0
                  }} />
                  <span style={{
                    fontSize: '1rem',
                    color: '#4a5568',
                    fontWeight: 500
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Features */}
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
              Comprehensive Property Management Solutions
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
                  Seamless Tenant Communication and Support
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568',
                  marginBottom: '1rem'
                }}>
                  One of the biggest headaches in property management is ensuring smooth communication with tenants. With our property management virtual assistant by your side, tenant interactions are handled with professionalism and care.
                </p>
                <ul style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: '#4a5568',
                  listStyleType: 'disc',
                  paddingLeft: '1.5rem'
                }}>
                  <li>24/7 availability via phone, email, and messaging.</li>
                  <li>Immediate attention to tenant inquiries and concerns.</li>
                  <li>Efficient lease agreement management and document organization.</li>
                </ul>
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
                  Streamlined Rent Collection and Reporting
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568',
                  marginBottom: '1rem'
                }}>
                  Rent collection should be straightforward, not stressful. Let us take care of it with features like:
                </p>
                <ul style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: '#4a5568',
                  listStyleType: 'disc',
                  paddingLeft: '1.5rem'
                }}>
                  <li>Automated rent reminders to encourage timely payments.</li>
                  <li>Precise payment tracking to monitor financial flows.</li>
                  <li>Detailed reporting assistance to keep you informed.</li>
                </ul>
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
                  Efficient Maintenance Coordination
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568',
                  marginBottom: '1rem'
                }}>
                  Maintenance issues can arise unexpectedly. Our virtual property management team ensures these hiccups are addressed without delay:
                </p>
                <ul style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: '#4a5568',
                  listStyleType: 'disc',
                  paddingLeft: '1.5rem'
                }}>
                  <li>Prompt handling of maintenance requests.</li>
                  <li>Coordination with trusted vendors.</li>
                  <li>Regular updates on the status of requests.</li>
                </ul>
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
                  Maximize Occupancy with Expert Marketing Support
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568',
                  marginBottom: '1rem'
                }}>
                  Vacant properties shouldn't stay that way for long. Our marketing support ensures your rentals are always in demand:
                </p>
                <ul style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: '#4a5568',
                  listStyleType: 'disc',
                  paddingLeft: '1.5rem'
                }}>
                  <li>Strategic advertising of vacant properties.</li>
                  <li>Assistance in showcasing your listings to attract quality tenants.</li>
                  <li>Innovative approaches to maximize property visibility.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Flexible Service Options */}
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
              Flexible Service Options Tailored to Your Needs
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              At Alpha Ahead LLC, we understand that every property and situation is unique. That's why our virtual property management services are flexible:
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
                color: '#fff',
                textAlign: 'center'
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}>
                  Part-time Support
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  opacity: 0.95
                }}>
                  For specific needs and occasional assistance
                </p>
              </div>
              <div style={{
                background: '#DC520E',
                borderRadius: '12px',
                padding: '2rem',
                color: '#fff',
                textAlign: 'center'
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}>
                  Full-time Assistance
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  opacity: 0.95
                }}>
                  For comprehensive management solutions
                </p>
              </div>
              <div style={{
                background: '#DC520E',
                borderRadius: '12px',
                padding: '2rem',
                color: '#fff',
                textAlign: 'center'
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}>
                  Project-based Help
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  opacity: 0.95
                }}>
                  For occasional tasks and special projects
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
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
              Enjoy the Benefits of a Virtual Property Management Assistant
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '3rem',
              textAlign: 'center'
            }}>
              What sets Alpha Ahead LLC apart is the tangible benefits you'll experience:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              {[
                { title: "Save Time", desc: "Outsource routine tasks so you can enjoy a more balanced life." },
                { title: "Reduce Stress", desc: "Leave the daily operations to us and rest easy knowing your properties are in good hands." },
                { title: "Lower Overhead Costs", desc: "Benefit from our services without the expenses of hiring an in-house property manager." },
                { title: "Enhance Tenant Satisfaction", desc: "Ensure tenants receive quick, professional responses to all inquiries and issues." },
                { title: "Stay Organized", desc: "Keep track of leases, payments, maintenance, and more with our efficient tracking systems." }
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
              Who Benefits from Virtual Property Management Services?
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '3rem',
              textAlign: 'center'
            }}>
              Our services are incredibly versatile and beneficial for various real estate professionals:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              {[
                { title: "Independent Landlords", desc: "Eliminate the juggle and manage properties with ease." },
                { title: "Real Estate Investors", desc: "Focus on expanding your portfolio while we handle the admin side." },
                { title: "Property Management Companies", desc: "Supplement your team's efforts with reliable support." },
                { title: "Realtors and Brokers", desc: "Offer enhanced rental management services to your clients." },
                { title: "Short-term Rental Owners", desc: "Achieve peace of mind with ongoing assistance tailored to your needs." }
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

          {/* Take Control */}
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
              Take Control with Alpha Ahead LLC
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              Real estate management doesn't have to be an overwhelming task. With Alpha Ahead LLC's Virtual Property Manager at your service, you can streamline operations, reduce costs, and provide an excellent tenant experience—all while freeing up time to concentrate on growing your real estate investments.
            </p>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              Ready to enhance your property management with a dedicated property management virtual assistant? Contact Alpha Ahead LLC today and take the first step towards transforming the way you manage properties.
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
              Schedule a consultation with us now and discover how we can boost your real estate game to the next level.
            </h3>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: 1.6,
              marginBottom: '2rem',
              opacity: 0.95
            }}>
              Get in touch, and let's build a prosperous future for your real estate investments!
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

export default VirtualPropertyManagementDetails;
