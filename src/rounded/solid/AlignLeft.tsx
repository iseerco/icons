import React from 'react';
import type { IconProps } from '../../types';

export const AlignLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M1,6H23a1,1,0,0,0,0-2H1A1,1,0,0,0,1,6Z"/><path d="M1,11H15a1,1,0,0,0,0-2H1a1,1,0,0,0,0,2Z"/><path d="M15,19H1a1,1,0,0,0,0,2H15a1,1,0,0,0,0-2Z"/><path d="M23,14H1a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/></svg>
);

AlignLeft.displayName = 'AlignLeft';
