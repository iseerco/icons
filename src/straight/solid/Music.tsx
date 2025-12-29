import React from 'react';
import type { IconProps } from '../../types';

export const Music: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,1H11A3,3,0,0,0,8,4V14a5,5,0,1,0,2,4V4a1,1,0,0,1,1-1H21a1,1,0,0,1,1,1V14a5,5,0,1,0,2,4V4A3,3,0,0,0,21,1Z"/></svg>
);

Music.displayName = 'Music';
