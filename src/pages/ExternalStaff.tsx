import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ExternalStaff = () => {
    const { t } = useTranslation();

    return (
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#f5f5f5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'start',
            padding: '2rem 1rem 1rem 1rem' // top padding reduced
        }}>
            <div style={{
                backgroundColor: '#fff',
                maxWidth: '360px',
                width: '100%',
                padding: '2rem',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                textAlign: 'center',
                marginTop: '1rem' // optional if you want a little breathing room from top
            }}>
                <img
                    src="/hamzaimage.jpg"
                    alt="Muhammad Hamza Ghafoor"
                    style={{
                        width: '140px',
                        height: '140px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        marginBottom: '1rem'
                    }}
                />
                <h2 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#222',
                    marginBottom: '0.25rem'
                }}>
                    Muhammad Hamza Ghafoor
                </h2>
                <p style={{
                    marginTop: '1rem',
                    fontSize: '0.85rem',
                    color: '#555',
                }}>Jacob Wright</p>
                <p style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#DC520E'
                }}>
                    AE / VA / QA
                </p>
                <p style={{
                    marginTop: '1rem',
                    fontSize: '0.85rem',
                    color: '#555',
                    lineHeight: '1.6'
                }}>
                    {t('staff.bio', {
                        defaultValue: 'As a Virtual Assistant and Account Executive, I ensure timely delivery of tasks with top-tier efficiency. I maintain a strong focus on quality and seamless execution to exceed client expectations.'
                    })}
                </p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginTop: '1.5rem'
                }}>
                    <button 
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        aria-label="Facebook"
                        onClick={() => window.open('https://www.facebook.com/alphaahead', '_blank', 'noopener,noreferrer')}
                    >
                        <FontAwesomeIcon icon={faFacebook} color="#4267B2" />
                    </button>
                    <button 
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        aria-label="Twitter"
                        onClick={() => window.open('https://twitter.com/alphaahead', '_blank', 'noopener,noreferrer')}
                    >
                        <FontAwesomeIcon icon={faTwitter} color="#1DA1F2" />
                    </button>
                    <button 
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                        aria-label="Instagram"
                        onClick={() => window.open('https://www.instagram.com/alpha_ahead_official/', '_blank', 'noopener,noreferrer')}
                    >
                        <FontAwesomeIcon icon={faInstagram} color="#E1306C" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ExternalStaff;
