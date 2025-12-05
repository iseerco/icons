import React from 'react';
import type { IconProps } from '../../types';

export const ObjectUnion: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,24h-6c-2.76,0-5-2.24-5-5v-3h-3c-2.76,0-5-2.24-5-5V5C0,2.24,2.24,0,5,0h6c2.76,0,5,2.24,5,5v3h3c2.76,0,5,2.24,5,5v6c0,2.76-2.24,5-5,5ZM5,2c-1.65,0-3,1.35-3,3v6c0,1.65,1.35,3,3,3h4c.55,0,1,.45,1,1v4c0,1.65,1.35,3,3,3h6c1.65,0,3-1.35,3-3v-6c0-1.65-1.35-3-3-3h-4c-.55,0-1-.45-1-1V5c0-1.65-1.35-3-3-3H5Z"/></svg>
);

ObjectUnion.displayName = 'ObjectUnion';
