import React from 'react';
import type { IconProps } from '../../types';

export const Subtitles: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M24,22H0V5A3,3,0,0,1,3,2H21a3,3,0,0,1,3,3ZM2,20H22V5a1,1,0,0,0-1-1H3A1,1,0,0,0,2,5Z"/><rect x="9" y="11" width={size} height={size}/><rect x="4" y="11" width={size} height={size}/><rect x="4" y="16" width={size} height={size}/><rect x="17" y="16" width={size} height={size}/></g></svg>
);

Subtitles.displayName = 'Subtitles';
