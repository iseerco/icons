import React from 'react';
import type { IconProps } from '../../types';

export const VenusDouble: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M8,19h3v2H8v3H6V21H3V19H6V14.849A7.5,7.5,0,1,1,10.124.478a9.454,9.454,0,0,0,0,14.044A7.521,7.521,0,0,1,8,14.977ZM24,7.5a7.5,7.5,0,1,0-8,7.475V19H13v2h3v3h2V21h3V19H18V14.849A7.513,7.513,0,0,0,24,7.5Z"/></svg>
);

VenusDouble.displayName = 'VenusDouble';
