import React from 'react';
import type { IconProps } from '../../types';

export const VenusMars: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,2V6H22V3.414l-2.4,2.4A7.028,7.028,0,1,1,18.184,4.4l2.4-2.4H18V0h4A2,2,0,0,1,24,2ZM8,16.683A8.961,8.961,0,0,1,8.214,3.117,7.014,7.014,0,0,0,7,3,7,7,0,0,0,6,16.92V19H3v2H6v3H8V21h3V19H8Z"/></svg>
);

VenusMars.displayName = 'VenusMars';
