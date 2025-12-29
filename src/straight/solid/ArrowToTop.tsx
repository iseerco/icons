import React from 'react';
import type { IconProps } from '../../types';

export const ArrowToTop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M10.553,2a2.578,2.578,0,0,0-.321.263l-4.95,4.95L6.7,8.627l4.3-4.3V24h2V4.324l4.3,4.3,1.414-1.414-4.95-4.95A2.578,2.578,0,0,0,13.447,2H19V0H5V2Z"/></svg>
);

ArrowToTop.displayName = 'ArrowToTop';
