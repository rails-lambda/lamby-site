import React from "react";

const DocNames = {
  anatomy: "How Lamby Works",
  cpu: "CPU Architecture",
  environment: "ENV Variables & Secrets",
  assets: "JavaScript & Assets",
  deploy: "Build & Deploy",
  "custom-domain": "Custom Domain Names",
  activejob: "ActiveJob & Background Processing",
  observability: "Logging & Observability",
  database: "Database & VPCs",
  webservers: "Web Proxy Integrations",
};

const titleize = function (str) {
  return str
    .replace(/(_|-)/g, " ")
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.toLowerCase().slice(1))
    .join(" ");
};

export default function DocLink({ id, name, anchor }) {
  const aLink = name || DocNames[id] || titleize(id);
  if (anchor) {
    return <a href={`/docs/${id}#${anchor}`}>{aLink}</a>;
  } else {
    return <a href={`/docs/${id}`}>{aLink}</a>;
  }
}
