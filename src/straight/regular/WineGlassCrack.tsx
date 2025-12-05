import React from 'react';
import type { IconProps } from '../../types';

export const WineGlassCrack: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,9V0H5V9c0,3.52,2.612,6.441,6,6.928v6.072H7v2h10v-2h-4v-6.072c3.388-.487,6-3.408,6-6.928Zm-12,0V2h3.523l-2,5h4l-1.452,3.629,1.857,.742,2.548-6.371h-4l1.2-3h4.323v7c0,2.757-2.243,5-5,5s-5-2.243-5-5Z"/></svg>
);

WineGlassCrack.displayName = 'WineGlassCrack';
