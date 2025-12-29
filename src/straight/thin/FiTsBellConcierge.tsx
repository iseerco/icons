import React from 'react';
import type { IconProps } from '../../types';

export const FiTsBellConcierge: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m24,18v-3c0-6.449-5.114-11.726-11.5-11.989V0h-1v3.011C5.114,3.274,0,8.551,0,15v3h11.5v3H0v1h24v-1h-11.5v-3h11.5ZM1,15c0-6.065,4.935-11,11-11s11,4.935,11,11v2H1v-2Z"/></svg>
);

FiTsBellConcierge.displayName = 'FiTsBellConcierge';
