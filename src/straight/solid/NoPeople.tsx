import React from 'react';
import type { IconProps } from '../../types';

export const NoPeople: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,22H3c-1.65,0-3-1.35-3-3V5c0-1.65,1.35-3,3-3H21c1.65,0,3,1.35,3,3v14c0,1.65-1.35,3-3,3Z"/></svg>
);

NoPeople.displayName = 'NoPeople';
