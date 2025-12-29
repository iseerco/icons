import React from 'react';
import type { IconProps } from '../../types';

export const LevelUpAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13,6V21a3,3,0,0,1-3,3H0V22H10a1,1,0,0,0,1-1V6H5.921L11,.445A1.338,1.338,0,0,1,13,.445L18.079,6Z"/></svg>
);

LevelUpAlt.displayName = 'LevelUpAlt';
