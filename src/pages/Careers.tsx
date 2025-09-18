import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Careers: React.FC = () => {
  const { t } = useTranslation();
  const [screenWidth, setScreenWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
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

  // Job positions data
  const jobPositions = [
    {
      id: 1,
      title: "Business Development Executive (BDE)",
      description: "We're looking for a driven Business Development Executive (BDE) to help us grow our client base and expand into new markets. This is a key role where you'll be responsible for generating leads, fostering client relationships, and creating opportunities for business growth. If you're passionate about sales, market analysis, and working closely with leadership, we want to hear from you.",
      responsibilities: [
        "Identify and generate new business opportunities in key markets.",
        "Cultivate relationships with potential clients through meetings, calls, and email campaigns.",
        "Manage and track sales pipelines, ensuring all opportunities are followed through effectively.",
        "Work with the marketing and product teams to develop strategies that align with business goals."
      ],
      skills: [
        "Proven experience in business development or sales roles.",
        "Excellent communication, negotiation, and interpersonal skills.",
        "Strong organizational and time-management abilities.",
        "Knowledge of CRM tools and lead generation platforms."
      ],
      whyJoin: "At Alpha Ahead, we provide an environment where you can thrive professionally while contributing to the growth of a dynamic team. If you're eager to make an impact and accelerate your career, this is the place for you."
    },
    {
      id: 2,
      title: "Video Editor",
      description: "We're seeking a creative Video Editor to join our dynamic content team. This role is perfect for someone who's passionate about crafting compelling video content for marketing campaigns, brand storytelling, and social media. You will collaborate closely with marketing and creative teams to produce high-quality videos that engage and convert our audience.",
      responsibilities: [
        "Edit video content for social media, promotional campaigns, and website.",
        "Collaborate with the marketing and design teams to understand brand voice and creative vision.",
        "Manage multiple video projects from concept to final delivery within deadlines.",
        "Stay up-to-date with video trends and new editing software/tools."
      ],
      skills: [
        "Proficiency in Adobe Premiere Pro, After Effects, and other video editing software.",
        "Strong understanding of video production, sound design, and color grading.",
        "A creative portfolio demonstrating your editing skills and video work.",
        "Ability to work under tight deadlines with attention to detail."
      ],
      whyJoin: "At Alpha Ahead, you'll have the opportunity to create impactful videos that shape our brand's voice across platforms. If you're passionate about storytelling through visuals and want to grow with a forward-thinking team, we'd love to meet you."
    },
    {
      id: 3,
      title: "HR Assistant",
      description: "We're looking for an HR Assistant to help with the day-to-day HR operations. This is an exciting opportunity for someone who's organized, detail-oriented, and interested in working in a fast-paced environment. You'll be responsible for supporting HR functions like recruitment, employee onboarding, and assisting with administrative HR tasks.",
      responsibilities: [
        "Assist in the recruitment process by scheduling interviews, managing job postings, and reviewing resumes.",
        "Help with onboarding new employees and ensuring smooth integration into the company.",
        "Maintain employee records, ensuring accuracy and confidentiality.",
        "Provide support in payroll processing, benefits administration, and other HR-related duties."
      ],
      skills: [
        "A degree in Human Resources, Business Administration, or related field.",
        "Strong organizational skills and attention to detail.",
        "Excellent communication skills, both verbal and written.",
        "Ability to handle sensitive information with discretion."
      ],
      whyJoin: "At Alpha Ahead, you will play a key role in fostering a positive workplace culture. This is a great opportunity for someone looking to grow their HR career in a supportive, growth-oriented environment."
    }
  ];

  const JobCard: React.FC<{ job: any }> = ({ job }) => {
    const handleApplyNow = () => {
      setSelectedJob(job);
      setShowApplicationForm(true);
    };

    return (
    <div style={{
      background: '#fff',
      borderRadius: '16px',
      padding: '2rem',
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      border: '1px solid #f0f0f0',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
    }}>
      <h3 style={{
        fontSize: '1.4rem',
        fontWeight: 700,
        color: '#DC520E',
        marginBottom: '1rem',
        lineHeight: 1.3
      }}>{job.title}</h3>
      
      <p style={{
        fontSize: '1rem',
        color: '#666',
        lineHeight: 1.6,
        marginBottom: '1.5rem'
      }}>{job.description}</p>

      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={{
          fontSize: '1.1rem',
          fontWeight: 600,
          color: '#333',
          marginBottom: '0.75rem'
        }}>Key Responsibilities:</h4>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {job.responsibilities.map((resp: string, index: number) => (
            <li key={index} style={{
              fontSize: '0.9rem',
              color: '#666',
              lineHeight: 1.5,
              marginBottom: '0.5rem',
              paddingLeft: '1.5rem',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                top: '0.3rem',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#DC520E'
              }} />
              {resp}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h4 style={{
          fontSize: '1.1rem',
          fontWeight: 600,
          color: '#333',
          marginBottom: '0.75rem'
        }}>Skills & Qualifications:</h4>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          {job.skills.map((skill: string, index: number) => (
            <li key={index} style={{
              fontSize: '0.9rem',
              color: '#666',
              lineHeight: 1.5,
              marginBottom: '0.5rem',
              paddingLeft: '1.5rem',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                top: '0.3rem',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#DC520E'
              }} />
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginBottom: '2rem', flex: 1 }}>
        <h4 style={{
          fontSize: '1.1rem',
          fontWeight: 600,
          color: '#333',
          marginBottom: '0.75rem'
        }}>Why Join Us:</h4>
        <p style={{
          fontSize: '0.9rem',
          color: '#666',
          lineHeight: 1.6,
          fontStyle: 'italic'
        }}>{job.whyJoin}</p>
      </div>

      <button 
        onClick={handleApplyNow}
        style={{
          background: '#DC520E',
          color: '#fff',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          width: '100%'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 82, 14, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}>
        Apply Now
      </button>
    </div>
    );
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
            Join Our Team
          </h1>
          <p style={{
            fontSize: '1.2rem',
            lineHeight: 1.6,
            color: '#fff',
            maxWidth: 800,
            margin: '0 auto 2rem',
            opacity: 0.95
          }}>
            We're always on the lookout for passionate, talented individuals to help us drive innovation and growth. Check out our open positions below.
          </p>
          <button style={{
            background: '#fff',
            color: '#DC520E',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '8px',
            fontSize: '1.1rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginBottom: '2rem'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            Explore Opportunities with Alpha Ahead
          </button>
          <p style={{
            fontSize: '1rem',
            lineHeight: 1.6,
            color: '#fff',
            maxWidth: 700,
            margin: '0 auto',
            opacity: 0.9,
            fontStyle: 'italic'
          }}>
            At Alpha Ahead, we value collaboration, creativity, and dedication. Join our team and be part of a forward-thinking company committed to making an impact.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section style={{ background: '#f9f9f9', padding: paddingSection }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          <h2 style={{
            fontSize: headingFontSize,
            fontWeight: 700,
            color: '#333',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Open Positions
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {jobPositions.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section style={{ background: '#fff', padding: paddingSection }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: headingFontSize,
            fontWeight: 700,
            color: '#333',
            marginBottom: '2rem'
          }}>
            Our Culture
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              background: '#f9f9f9',
              padding: '2rem',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem'
              }}>🤝</div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#333',
                marginBottom: '0.5rem'
              }}>Collaboration</h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666',
                lineHeight: 1.5
              }}>We believe in the power of teamwork and shared success.</p>
            </div>
            <div style={{
              background: '#f9f9f9',
              padding: '2rem',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem'
              }}>💡</div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#333',
                marginBottom: '0.5rem'
              }}>Creativity</h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666',
                lineHeight: 1.5
              }}>Innovation drives everything we do at Alpha Ahead.</p>
            </div>
            <div style={{
              background: '#f9f9f9',
              padding: '2rem',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem'
              }}>🎯</div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#333',
                marginBottom: '0.5rem'
              }}>Dedication</h3>
              <p style={{
                fontSize: '0.9rem',
                color: '#666',
                lineHeight: 1.5
              }}>We're committed to excellence in everything we deliver.</p>
            </div>
          </div>
        </div>
      </section>

             {/* Final Call to Action */}
       <section style={{ background: '#fff', padding: '4rem 2rem', textAlign: 'center' }}>
         <div style={{ maxWidth: 1200, margin: '0 auto' }}>
           <h2 style={{
             fontSize: headingFontSize,
             fontWeight: 700,
             color: '#DC520E',
             marginBottom: '1rem'
           }}>
             Ready to Make a Difference?
           </h2>
           <p style={{
             fontSize: '1.1rem',
             lineHeight: 1.6,
             color: '#DC520E',
             maxWidth: 700,
             margin: '0 auto 2rem',
             opacity: 0.8
           }}>
             If you're passionate about making a difference and want to join a forward-thinking company, Alpha Ahead is the place for you. We believe in supporting our team members' growth while fostering a culture of collaboration and innovation.
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
             Apply Now - We'd love to have you on our team!
           </button>
                 </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
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
          zIndex: 1000,
          padding: '2rem'
        }}>
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            padding: '3rem',
            maxWidth: 600,
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative'
          }}>
            <button 
              onClick={() => setShowApplicationForm(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#666'
              }}>
              ×
            </button>

            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              color: '#DC520E',
              marginBottom: '1rem'
            }}>
              Apply for {selectedJob?.title}
            </h2>

            <form onSubmit={(e) => {
              e.preventDefault();
              setShowApplicationForm(false);
              setShowConfirmation(true);
              setTimeout(() => setShowConfirmation(false), 5000);
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                  Full Name *
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

              <div style={{ marginBottom: '1.5rem' }}>
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

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                  Phone Number *
                </label>
                <input 
                  type="tel" 
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

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                  LinkedIn Profile
                </label>
                <input 
                  type="url" 
                  placeholder="https://linkedin.com/in/yourprofile"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                  Years of Experience *
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
                  <option value="">Select experience level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                  Cover Letter *
                </label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
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

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#333' }}>
                  Resume/CV *
                </label>
                <input 
                  type="file" 
                  accept=".pdf,.doc,.docx"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '1rem'
                  }}
                />
                <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>
                  Accepted formats: PDF, DOC, DOCX (Max 5MB)
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
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
                  Cancel
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
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
            <h3 style={{ color: '#DC520E', marginBottom: '1rem' }}>Application Submitted!</h3>
            <p style={{ color: '#666', marginBottom: '2rem' }}>
              Thank you for your application. We'll review your details and get back to you within 3-5 business days.
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

export default Careers;
