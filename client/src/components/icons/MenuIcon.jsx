import React from 'react';

const MenuIcon = ({ className, ...rest }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} {...rest}>
    <rect x="4" y="5" width="16" height="1.5" rx="0.75" fill="currentColor"/>
    <rect x="4" y="11" width="10" height="1.5" rx="0.75" fill="currentColor"/>
    <rect x="4" y="17" width="16" height="1.5" rx="0.75" fill="currentColor"/>
  </svg>
);

export default MenuIcon; 