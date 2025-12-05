import React from 'react';
import type { IconProps } from '../../types';

export const HatBirthday: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M17.031,12,10.207,24H6.177L14.943,8.239Zm1.137,2.046L12.508,24H16.7l3.548-6.209Zm3.217,5.791L19.006,24H23.7ZM12.542,3.916a2,2,0,1,0-1.084,0L.3,24H3.889L13.8,6.18Z"/></svg>
);

HatBirthday.displayName = 'HatBirthday';
