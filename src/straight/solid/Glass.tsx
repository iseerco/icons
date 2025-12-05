import React from 'react';
import type { IconProps } from '../../types';

export const Glass: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M1.354,0l.955,7H17l-.425,2H2.582L4.273,21.405A3.012,3.012,0,0,0,7.246,24h9.508a3.012,3.012,0,0,0,2.973-2.595L22.646,0Z"/></svg>
);

Glass.displayName = 'Glass';
