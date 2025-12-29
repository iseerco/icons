import React from 'react';
import type { IconProps } from '../../types';

export const LevelDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16.75,17.293,13,21.042V3a3,3,0,0,0-3-3H0V2H10a1,1,0,0,1,1,1V21.042L7.25,17.293,5.836,18.707l4.677,4.677a2.1,2.1,0,0,0,2.973,0l4.678-4.677Z"/></svg>
);

LevelDown.displayName = 'LevelDown';
