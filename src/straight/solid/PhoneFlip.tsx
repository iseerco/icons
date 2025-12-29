import React from 'react';
import type { IconProps } from '../../types';

export const PhoneFlip: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M7.5,24c-1.61,0-3.1-.61-4.21-1.72L.12,19.11l6.26-6.27,3.41,3.41c2.96-1.28,5.08-3.41,6.45-6.47l-3.41-3.41L19.11,.12l3.17,3.17c1.11,1.1,1.72,2.6,1.72,4.21,0,7.25-9.25,16.5-16.5,16.5Z"/></svg>
);

PhoneFlip.displayName = 'PhoneFlip';
