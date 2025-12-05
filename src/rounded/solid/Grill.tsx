import React from 'react';
import type { IconProps } from '../../types';

export const Grill: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.921,9.69a11.968,11.968,0,0,1-5.755,7.649l1.781,5.345a1,1,0,1,1-1.9.632L16.345,18.2A12.322,12.322,0,0,1,13,18.957V23a1,1,0,0,1-2,0V18.957A12.329,12.329,0,0,1,7.654,18.2l-1.7,5.117a1,1,0,1,1-1.9-.632l1.781-5.343C2.366,15.8-3.653,7.037,3,6H21A3.026,3.026,0,0,1,23.921,9.69ZM12,4a1,1,0,0,0,1-1V1a1,1,0,0,0-2,0V3A1,1,0,0,0,12,4Zm4,0a1,1,0,0,0,1-1V1a1,1,0,1,0-2,0V3A1,1,0,0,0,16,4ZM8,4A1,1,0,0,0,9,3V1A1,1,0,1,0,7,1V3A1,1,0,0,0,8,4Z"/></svg>
);

Grill.displayName = 'Grill';
