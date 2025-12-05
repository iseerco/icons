import React from 'react';
import type { IconProps } from '../../types';

export const ArrowFromTop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,2V0H5V2h6V21.207L6.7,16.9,5.282,18.318l4.95,4.95a2.5,2.5,0,0,0,3.536,0l4.95-4.95L17.3,16.9l-4.3,4.3V2Z"/></svg>
);

ArrowFromTop.displayName = 'ArrowFromTop';
