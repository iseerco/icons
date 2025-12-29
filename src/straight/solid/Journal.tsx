import React from 'react';
import type { IconProps } from '../../types';

export const Journal: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="m15,0H2v3H0v2h2v2H0v2h2v2H0v2h2v2H0v2h2v2H0v2h2v3h13c1.654,0,3-1.346,3-3V3c0-1.654-1.346-3-3-3Zm-1,7H6v-2h8v2Zm10,15l-2,2-2-2V2c0-1.105.895-2,2-2h0c1.105,0,2,.895,2,2v20Z"/>
</svg>
);

Journal.displayName = 'Journal';
