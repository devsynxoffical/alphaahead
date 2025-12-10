import React, { useEffect, useState } from 'react';

const ContactUs: React.FC = () => {
 const [screenWidth, setScreenWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [formStep, setFormStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
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

  // Contact locations data
  const locations = [
    {
      id: 1,
      name: "Alpha Ahead (USA)",
      address: "7901 4th ST N Ste 23684, ST. Petersburg, Florida 33702",
      phone: "+ 424-542-7170",
      email: "info@alphaaheadllc.com",
      whatsapp: null,
      mapUrl: "https://maps.google.com/?q=7901+4th+ST+N+Ste+23684,+ST.+Petersburg,+Florida+33702",
      coordinates: { lat: 27.7731, lng: -82.6400 }
    },
    {
      id: 2,
      name: "Alpha Ahead (UAE)",
      address: "Office 59, 2nd floor, first gulf business center, madina mall Muhaisnah, Dubai",
      phone: "+971 4 432 3080",
      email: "info@alphaaheadllc.com",
      whatsapp: "+971 50 560 6877",
      mapUrl: "https://maps.google.com/?q=Office+59,+2nd+floor,+first+gulf+business+center,+madina+mall+Muhaisnah,+Dubai",
      coordinates: { lat: 25.0920, lng: 55.1381 }
    },
    {
      id: 3,
      name: "Alpha Ahead (Pakistan)",
      address: "206, Service Road East, Sector I-10/3, Islamabad",
      phone: "+ 92-3450195401",
      email: "info@alphaaheadllc.com",
      whatsapp: "+ 92-3450195401",
      mapUrl: "https://maps.google.com/?q=206,+Service+Road+East,+Sector+I-10/3,+Islamabad",
      coordinates: { lat: 33.6844, lng: 73.0479 }
    }
  ];


  const inquiryTypes = [
    "General Inquiry",
    "Partnership/Collaboration", 
    "Project Request",
    "Technical Support"
  ];

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Retail",
    "Manufacturing",
    "Real Estate",
    "Other"
  ];

  const budgets = [
    "$5,000 - $10,000",
    "$10,000 - $25,000", 
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+"
  ];

  const timeframes = [
    "Immediate",
    "1-2 months",
    "3-6 months",
    "6+ months"
  ];

  const services = [
    "Web Development",
    "Digital Marketing",
    "Lead Generation",
    "Virtual Assistant Services",
    "SEO Optimization",
    "Content Creation",
    "Social Media Management",
    "Other"
  ];

  const LocationCard: React.FC<{ location: any }> = ({ location }) => (
    <div style={{
      background: '#fff',
      borderRadius: '12px',
      padding: '1.5rem',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      border: '1px solid #f0f0f0',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    }}>
      <div>
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: 700,
          color: '#DC520E',
          marginBottom: '0.75rem',
          textAlign: 'center'
        }}>{location.name}</h3>
        
        <p style={{
          fontSize: '0.95rem',
          color: '#666',
          lineHeight: 1.5,
          marginBottom: '1rem',
          textAlign: 'center'
        }}>{location.address}</p>

        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <a 
            href={location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#DC520E',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 600,
              display: 'inline-block',
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
            Get Directions
          </a>
        </div>

        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            justifyContent: 'center'
          }}>
            <div>
              <p style={{
                fontSize: '0.9rem',
                color: '#333',
                margin: 0,
                fontWeight: 600
              }}>
                <a href={`tel:${location.phone}`} style={{ color: '#DC520E', textDecoration: 'none' }}>{location.phone}</a>
              </p>
            </div>
          </div>
          
          {location.whatsapp && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              justifyContent: 'center'
            }}>
              <div>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#333',
                  margin: 0,
                  fontWeight: 600
                }}>
                  <a href={`https://wa.me/${location.whatsapp.replace(/\s/g, '')}`} style={{ color: '#DC520E', textDecoration: 'none' }}>{location.whatsapp}</a>
                </p>
              </div>
            </div>
          )}
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            justifyContent: 'center'
          }}>
            <div>
              <p style={{
                fontSize: '0.9rem',
                color: '#333',
                margin: 0,
                fontWeight: 600
              }}>
                <a href={`mailto:${location.email}`} style={{ color: '#DC520E', textDecoration: 'none' }}>{location.email}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 5000);
    setFormStep(1);
  };

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
            We'd Love to Hear From You
          </h1>

        </div>
      </section>

      {/* Contact Methods */}
      <section style={{ background: '#f9f9f9', padding: paddingSection }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          <h2 style={{
            fontSize: headingFontSize,
            fontWeight: 700,
            color: '#333',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Get In Touch
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                margin: '0 auto 1rem',
                background: 'url("/email_1626348.png") center/contain no-repeat',
                backgroundSize: 'contain'
              }} />
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#333',
                marginBottom: '1rem'
              }}>Email Us</h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666',
                marginBottom: '1.5rem'
              }}>Send us a detailed message and we'll get back to you within 24 hours.</p>
              <a 
                href="mailto:info@alphaaheadllc.com"
                style={{
                  background: '#DC520E',
                  color: '#fff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  display: 'inline-block',
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
                Send Email
              </a>
            </div>

            <div style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                margin: '0 auto 1rem',
                background: 'url("/whatsapp_12635043.png") center/contain no-repeat',
                backgroundSize: 'contain'
              }} />
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#333',
                marginBottom: '1rem'
              }}>WhatsApp</h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666',
                marginBottom: '1.5rem'
              }}>Quick questions? Chat with us on WhatsApp for instant responses.</p>
              <a 
                href="https://wa.me/971505606877"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#DC520E',
                  color: '#fff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  display: 'inline-block',
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
                Start Chat
              </a>
            </div>

            <div style={{
              background: '#fff',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                margin: '0 auto 1rem',
                background: 'url("/outgoing-call_8816785.png") center/contain no-repeat',
                backgroundSize: 'contain'
              }} />
              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 600,
                color: '#333',
                marginBottom: '1rem'
              }}>Call Us</h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666',
                marginBottom: '1.5rem'
              }}>Speak directly with our team for immediate assistance and support.</p>
              <a 
                href="tel:+4245427170"
        style={{
                  background: '#DC520E',
                  color: '#fff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  display: 'inline-block',
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
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section style={{ background: '#fff', padding: paddingSection }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{
            fontSize: headingFontSize,
            fontWeight: 700,
            color: '#333',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Contact Our Offices
        </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      

      {/* Contact Form */}
      <section style={{ background: '#f9f9f9', padding: paddingSection }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{
            fontSize: headingFontSize,
            fontWeight: 700,
            color: '#333',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Get In Touch
          </h2>
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
            maxWidth: 800,
            margin: '0 auto'
          }}>
            <form onSubmit={handleFormSubmit}>
              {formStep === 1 ? (
                <div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '2rem'
                  }}>Step 1: Basic Information</h3>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                      Inquiry Type *
                    </label>
                    <select 
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '6px',
                        fontSize: '1rem'
                      }}>
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                        Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #ddd',
                          borderRadius: '6px',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                        Email *
                      </label>
                      <input 
                        type="email" 
                        required
                        style={{
                          width: '100%',
                          padding: '0.75rem',
                          border: '1px solid #ddd',
                          borderRadius: '6px',
                          fontSize: '1rem'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                      Subject *
                    </label>
                    <input 
                      type="text" 
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '6px',
                        fontSize: '1rem'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                      Message *
                    </label>
                    <textarea 
                      required
                      rows={4}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '6px',
                        fontSize: '1rem',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button 
                    type="button"
                    onClick={() => setFormStep(2)}
          style={{
                      background: '#DC520E',
                      color: '#fff',
                      border: 'none',
                      padding: '1rem 2rem',
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
                    Next Step
                  </button>
                </div>
              ) : (
                <div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: '#333',
                    marginBottom: '2rem'
                  }}>Step 2: Project Details</h3>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                      Industry
                    </label>
                    <select 
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '6px',
                        fontSize: '1rem'
                      }}>
                      <option value="">Select industry</option>
                      {industries.map((industry, index) => (
                        <option key={index} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                      Budget Range
                    </label>
                    <select 
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '6px',
                        fontSize: '1rem'
                      }}>
                      <option value="">Select budget range</option>
                      {budgets.map((budget, index) => (
                        <option key={index} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                      Project Timeframe
                    </label>
                    <select 
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '6px',
                        fontSize: '1rem'
                      }}>
                      <option value="">Select timeframe</option>
                      {timeframes.map((timeframe, index) => (
                        <option key={index} value={timeframe}>{timeframe}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                      Services of Interest
                    </label>
                    <select 
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid #ddd',
                        borderRadius: '6px',
                        fontSize: '1rem'
                      }}>
                      <option value="">Select service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <button 
                      type="button"
                      onClick={() => setFormStep(1)}
                      style={{
                        background: '#666',
                        color: '#fff',
                        border: 'none',
                        padding: '1rem 2rem',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}>
                      Back
                    </button>
                    <button 
                      type="submit"
              style={{
                        background: '#DC520E',
                        color: '#fff',
                        border: 'none',
                        padding: '1rem 2rem',
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
                      Send Message
                    </button>
                  </div>
                </div>
              )}
            </form>
              </div>
            </div>
      </section>

      



      {/* Confirmation Popup */}
      {showConfirmation && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: '#fff',
            padding: '3rem',
            borderRadius: '12px',
            textAlign: 'center',
            maxWidth: 400,
            margin: '2rem'
          }}>
            <h3 style={{ color: '#DC520E', marginBottom: '1rem' }}>Message Sent!</h3>
            <p style={{ color: '#666', marginBottom: '2rem' }}>
              We'll get back to you within 24 hours.
            </p>
            <button 
              onClick={() => setShowConfirmation(false)}
              style={{
                background: '#DC520E',
                color: '#fff',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '1rem'
              }}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUs;
