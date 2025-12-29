import React from 'react';
import type { IconProps } from '../../types';

export const T: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H3c-1.308,.005-1.307,1.995,0,2H11V23c.005,1.308,1.995,1.307,2,0V2h8c1.308-.005,1.307-1.995,0-2Z"/></svg>
);

T.displayName = 'T';
