import React from 'react';
import type { IconProps } from '../../types';

export const WineGlassCrack: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,9V0h-5.923l-1.6,4h4l-2.548,6.371-1.857-.742,1.452-3.629h-4L10.923,0H5V9c0,3.519,2.613,6.432,6,6.92v6.08H7v2h10v-2h-4v-6.08c3.387-.488,6-3.401,6-6.92Z"/></svg>
);

WineGlassCrack.displayName = 'WineGlassCrack';
