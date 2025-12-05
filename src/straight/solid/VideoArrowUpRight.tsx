import React from 'react';
import type { IconProps } from '../../types';

export const VideoArrowUpRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,5.007v13.985l-3-2.236V7.244l3-2.236Zm-5,1.993v13H0V7c0-1.654,1.346-3,3-3h13c1.654,0,3,1.346,3,3Zm-4,2c0-1.103-.897-2-2-2H7.979v2h3.606l-6.793,6.793,1.414,1.414,6.793-6.793v3.586h2v-5Z"/></svg>
);

VideoArrowUpRight.displayName = 'VideoArrowUpRight';
