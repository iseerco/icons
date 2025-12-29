import React from 'react';
import type { IconProps } from '../../types';

export const Utensils: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.609.812A2,2,0,0,0,15,2V24h2V19.666C21.8,14.414,24.4,8.156,18.609.812ZM12,0V9a3,3,0,0,1-3,3H8V24H6V12H5A3,3,0,0,1,2,9V0H4V9a1,1,0,0,0,1,1H6V0H8V10H9a1,1,0,0,0,1-1V0Z"/></svg>
);

Utensils.displayName = 'Utensils';
