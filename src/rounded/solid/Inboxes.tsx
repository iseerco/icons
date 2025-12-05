import React from 'react';
import type { IconProps } from '../../types';

export const Inboxes: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,24H5c-2.76,0-5-2.24-5-5v-3c0-1.65,1.35-3,3-3h3c1.1,0,2,.9,2,2s.9,2,2,2h4c1.1,0,2-.9,2-2s.9-2,2-2h3c1.65,0,3,1.35,3,3v3c0,2.76-2.24,5-5,5Zm0-13H5C2.24,11,0,8.76,0,6V3C0,1.35,1.35,0,3,0h3c1.1,0,2,.9,2,2s.9,2,2,2h4c1.1,0,2-.9,2-2s.9-2,2-2h3c1.65,0,3,1.35,3,3v3c0,2.76-2.24,5-5,5Z"/></svg>
);

Inboxes.displayName = 'Inboxes';
