import React from 'react';
import {
  FaHeadset, FaPhoneAlt, FaUserTie, FaBriefcase, FaBuilding, FaBullseye,
  FaSearch, FaCode, FaBullhorn, FaPaintBrush, FaVideo, FaServer,
} from 'react-icons/fa';

export const SERVICE_ICONS: Record<string, React.ReactNode> = {
  '/virtual-assistant': <FaHeadset />,
  '/cold-calling': <FaPhoneAlt />,
  '/personal-assistant': <FaUserTie />,
  '/business-assistant': <FaBriefcase />,
  '/property-management': <FaBuilding />,
  '/lead-generation': <FaBullseye />,
  '/seo': <FaSearch />,
  '/web-development': <FaCode />,
  '/digital-marketing': <FaBullhorn />,
  '/graphic-design': <FaPaintBrush />,
  '/video-editing': <FaVideo />,
  '/it-support': <FaServer />,
  '/other-services': <FaCode />,
};
