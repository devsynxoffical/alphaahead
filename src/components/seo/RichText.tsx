import React from 'react';
import { Link } from 'react-router-dom';

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Renders text with inline [label](/path) links. Internal paths use <Link>, external use <a>. */
export const RichText: React.FC<{ text: string }> = ({ text }) => {
  const parts: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const [, label, href] = m;
    parts.push(
      href.startsWith('/') ? (
        <Link key={m.index} to={href} style={{ color: '#DC520E', fontWeight: 600 }}>
          {label}
        </Link>
      ) : (
        <a key={m.index} href={href} target="_blank" rel="noopener noreferrer" style={{ color: '#DC520E', fontWeight: 600 }}>
          {label}
        </a>
      )
    );
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
};

export default RichText;
