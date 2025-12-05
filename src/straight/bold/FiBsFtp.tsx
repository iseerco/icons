import React from 'react';
import type { IconProps } from '../../types';

export const FiBsFtp: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 19h-8.851a3.509 3.509 0 0 0 -1.649-1.649v-2.351h7.5v-9.5a3.5 3.5 0 0 0 -3.5-3.5h-5.034l-2.909-2h-3.057a3.5 3.5 0 0 0 -3.5 3.5v11.5h7.5v2.351a3.509 3.509 0 0 0 -1.649 1.649h-8.851v3h8.851a3.479 3.479 0 0 0 6.3 0h8.849zm-18-12h12v5h-12z"/></svg>
);

FiBsFtp.displayName = 'FiBsFtp';
