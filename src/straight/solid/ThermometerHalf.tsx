import React from 'react';
import type { IconProps } from '../../types';

export const ThermometerHalf: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17,12.111V5C16.789-1.609,7.209-1.6,7,5v7.111a7,7,0,1,0,10,0ZM12,20a3,3,0,0,1-1-5.816V8h2v6.184A3,3,0,0,1,12,20Z"/></svg>
);

ThermometerHalf.displayName = 'ThermometerHalf';
