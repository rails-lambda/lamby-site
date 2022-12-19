import React from 'react';

const DocNames = {
  "anatomy": "How Lamby Works",
  "environment": 'ENV Variables & Secrets',
  "assets": 'JavaScript & Assets',
  "deploy": 'Build & Deploy',
  "custom-domain": 'Custom Domain Names',
  "activejob": 'ActiveJob & Background Processing',
  "observability": 'Logging & Observability',
  "database": 'Database & VPCs',
  "webservers": 'Web Proxy Integrations'
}

const titleize = function(str) {
  return str.replace(/(_|-)/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.toLowerCase().slice(1)).join(' ')
}

export default function DocLink({id, name}) {
  const aLink = name || DocNames[id] || titleize(id);
  return (
    <a href={`/docs/${id}`}>{aLink}</a>
  );
}
