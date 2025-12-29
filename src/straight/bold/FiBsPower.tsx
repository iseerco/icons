import React from 'react';
import type { IconProps } from '../../types';

export const FiBsPower: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16,2.764V6.082a8,8,0,1,1-8,0V2.764a11,11,0,1,0,8,0Z"/><rect x="10.5" width={size} height={size}/></svg>
);

FiBsPower.displayName = 'FiBsPower';
