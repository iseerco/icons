import React from 'react';
import type { IconProps } from '../../types';

export const DiagramNested: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20.5,14h-3c-1.93,0-3.5,1.57-3.5,3.5v.5h-5c-1.65,0-3-1.35-3-3v-5h.5c1.93,0,3.5-1.57,3.5-3.5V3.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5v3c0,1.93,1.57,3.5,3.5,3.5h.5v5c0,2.76,2.24,5,5,5h5v.5c0,1.93,1.57,3.5,3.5,3.5h3c1.93,0,3.5-1.57,3.5-3.5v-3c0-1.93-1.57-3.5-3.5-3.5Z"/></svg>
);

DiagramNested.displayName = 'DiagramNested';
