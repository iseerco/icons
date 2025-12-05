import React from 'react';
import type { IconProps } from '../../types';

export const Camping: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,16.919,16.184,24H7.816ZM23.592,19.6,12-.013.408,19.6A2.914,2.914,0,0,0,2.917,24H5.492L12,12.987,18.508,24h2.575a2.914,2.914,0,0,0,2.509-4.4Z"/></svg>
);

Camping.displayName = 'Camping';
