import React from 'react';
import type { IconProps } from '../../types';

export const NoPeople: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,22H5c-2.76,0-5-2.24-5-5V7C0,4.24,2.24,2,5,2h14c2.76,0,5,2.24,5,5v10c0,2.76-2.24,5-5,5Z"/></svg>
);

NoPeople.displayName = 'NoPeople';
