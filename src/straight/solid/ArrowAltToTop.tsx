import React from 'react';
import type { IconProps } from '../../types';

export const ArrowAltToTop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M11.017,2.445c.262-.297,.623-.445,.983-.445s.721,.148,.983,.445l5.017,5.555h-5V24h-2V8H6L11.017,2.445ZM21,0H3V2H21V0Z"/></svg>
);

ArrowAltToTop.displayName = 'ArrowAltToTop';
