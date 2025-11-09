import React from 'react';

export default function Logo({ className = 'h-9 w-9' }) {
  return (
    <img src="/vitaledge-logo.svg" alt="VitalEdge" className={`${className} rounded-lg shadow-sm`} />
  );
}
