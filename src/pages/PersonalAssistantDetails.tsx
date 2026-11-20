import React, { useEffect, useState } from 'react';
import { initialWidth } from '../utils/hydration';
import ServiceSummary from '../components/seo/ServiceSummary';
import { useNavigate } from 'react-router-dom';

const PersonalAssistantDetails: React.FC = () => {
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
            Personal Virtual Assistant Services
          </h1>
          <h2 style={{ 
            fontSize: 'clamp(1.2rem, 0.95rem + 1vw, 1.8rem)', 
            fontWeight: 600, 
            color: '#fff', 
            marginBottom: '2rem',
            opacity: 0.95,
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}>
            Alpha Ahead LLC: Simplifying Your Life with Premier Personal Assistant Services
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: 1.6, 
            color: '#fff', 
            maxWidth: 800, 
            margin: '0 auto', 
            opacity: 0.9 
          }}>
            In today's fast-paced world, balancing work, personal commitments, and life's unexpected surprises can feel overwhelming. That's where Alpha Ahead LLC steps in to redefine the art of managing your time and tasks.
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
              Our expert personal assistance services are tailored to meet the needs of busy professionals and dynamic individuals who seek efficiency and peace of mind. With Alpha Ahead LLC, you can streamline your life and focus on what truly matters.
            </p>
          </div>

          {/* Why Choose Us */}
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
              Why Choose Alpha Ahead LLC?
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '2rem',
              textAlign: 'justify'
            }}>
              Navigating through a sea of responsibilities doesn't have to be your norm. Our personal assistant services offer a lifeline to those who need a trusted partner in organization and task management. Here's what sets Alpha Ahead LLC apart:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              <div style={{
                background: '#fef3e2',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #fed7aa'
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#9a3412',
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
                  Professional Expertise
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Our team of dedicated personal assistants brings a wealth of experience and skills to manage your administrative, lifestyle, and business needs seamlessly.
                </p>
              </div>

              <div style={{
                background: '#fef3e2',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #fed7aa'
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#9a3412',
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
                  Tailored Support
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Whether you require in-person aid or virtual personal assistant services, our professionals adapt to your preferences and schedules.
                </p>
              </div>

              <div style={{
                background: '#fef3e2',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #fed7aa'
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#9a3412',
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
                  Comprehensive Services
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  From inbox management to travel coordination, our broad range of services ensures nothing falls through the cracks.
                </p>
              </div>

              <div style={{
                background: '#fef3e2',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #fed7aa'
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#9a3412',
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
                  Flexible Plans
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Enjoy the freedom of choosing part-time, full-time, or project-based services that suit your unique lifestyle and budget.
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
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
              Personal Assistance Services Designed for You
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(3, 1fr)',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              {/* Administrative Excellence */}
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
                  Administrative Excellence
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568',
                  marginBottom: '1rem'
                }}>
                  Tackle your to-do list with ease. Our personal assistant services excel in handling a myriad of administrative tasks.
                </p>
                <ul style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: '#4a5568',
                  paddingLeft: '1.5rem'
                }}>
                  <li>Scheduling & Calendar Management</li>
                  <li>Inbox Management</li>
                  <li>Research & Communication</li>
                </ul>
              </div>

              {/* Lifestyle Management */}
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
                  Lifestyle Management
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568',
                  marginBottom: '1rem'
                }}>
                  Life is meant to be enjoyed, not just endured. Our personal assistant service lets you reclaim your personal time.
                </p>
                <ul style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: '#4a5568',
                  paddingLeft: '1.5rem'
                }}>
                  <li>Travel Planning & Coordination</li>
                  <li>Event Planning</li>
                  <li>Personal Tasks</li>
                </ul>
              </div>

              {/* Business Support */}
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
                  Business Support
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568',
                  marginBottom: '1rem'
                }}>
                  For entrepreneurs and professionals seeking growth and innovation, our personal assistant service is your strategic partner.
                </p>
                <ul style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: '#4a5568',
                  paddingLeft: '1.5rem'
                }}>
                  <li>Task Management</li>
                  <li>Client Relations</li>
                  <li>Project Coordination</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
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
              The Benefits are Endless
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
                  Save Time
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  Time is a precious commodity. By delegating routine tasks to a professional assistant, you free up your schedule to focus on high-value priorities and personal commitments.
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
                  Organize with Ease
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  Experience the calm of having a structured schedule and a well-managed task list. Our personal assistance services keep you organized every step of the way.
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
                  Trustworthy Support
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  With Alpha Ahead LLC, enjoy the peace of mind that comes from knowing your personal assistant is committed to confidentiality and reliability.
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
                  Increase Productivity
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  opacity: 0.95
                }}>
                  Our services allow you to multiply your productivity, giving you an edge in both your personal and professional endeavors without the cost of a full-time hire.
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
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Who Can Benefit?
            </h3>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#4a5568',
              marginBottom: '3rem',
              textAlign: 'center'
            }}>
              Alpha Ahead LLC's personal assistant services cater to a diverse range of clients, each seeking to optimize their lifestyles and careers. Here's who stands to gain:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
              gap: '2rem'
            }}>
              <div style={{
                background: '#fef3e2',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #fed7aa'
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#9a3412',
                  marginBottom: '1rem'
                }}>
                  Busy Executives
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Gain back valuable hours to strategize and lead, leaving the granular details to our capable hands.
                </p>
              </div>

              <div style={{
                background: '#fef3e2',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #fed7aa'
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#9a3412',
                  marginBottom: '1rem'
                }}>
                  Entrepreneurs
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Focus on innovation and expansion without administrative distractions.
                </p>
              </div>

              <div style={{
                background: '#fef3e2',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #fed7aa'
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#9a3412',
                  marginBottom: '1rem'
                }}>
                  Professionals Balancing Work and Life
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Simplify your daily routine to achieve a harmonious work-life balance.
                </p>
              </div>

              <div style={{
                background: '#fef3e2',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #fed7aa'
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#9a3412',
                  marginBottom: '1rem'
                }}>
                  Small Business Owners
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Access expert admin and lifestyle support, tailored to the needs of your growing enterprise.
                </p>
              </div>

              <div style={{
                background: '#fef3e2',
                borderRadius: '12px',
                padding: '2rem',
                border: '1px solid #fed7aa',
                gridColumn: isMobile ? '1' : isTablet ? '1' : '1 / -1'
              }}>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#9a3412',
                  marginBottom: '1rem'
                }}>
                  Families and Individuals
                </h4>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#4a5568'
                }}>
                  Free your time and energy for moments that matter with personalized assistance from trusted professionals.
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
              Let Alpha Ahead LLC Simplify Your Life
            </h3>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: 1.6,
              marginBottom: '2rem',
              opacity: 0.95
            }}>
              Your time is your most valuable asset. With Alpha Ahead LLC's personal assistance services, you can reclaim it, redefine it, and make the most of every moment. Embrace a future where you focus on the big picture while we manage the details.
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

export default PersonalAssistantDetails;
