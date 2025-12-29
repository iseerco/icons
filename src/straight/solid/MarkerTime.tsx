import React from 'react';
import type { IconProps } from '../../types';

export const MarkerTime: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m12 5a5 5 0 1 0 5 5 5.006 5.006 0 0 0 -5-5zm.793 7.207-1.793-1.793v-3.414h2v2.586l1.207 1.207zm6.278-9.271a10 10 0 1 0 -14.134 14.149l7.063 6.909 7.071-6.916a10.011 10.011 0 0 0 0-14.142zm-7.071 14.064a7 7 0 1 1 7-7 7.008 7.008 0 0 1 -7 7z"/></svg>
);

MarkerTime.displayName = 'MarkerTime';
