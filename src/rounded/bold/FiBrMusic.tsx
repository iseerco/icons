import React from 'react';
import type { IconProps } from '../../types';

export const FiBrMusic: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.5,1h-5A5.506,5.506,0,0,0,8,6.5v6.107A5.5,5.5,0,1,0,10.975,18H11V6.5A2.5,2.5,0,0,1,13.5,4h5A2.5,2.5,0,0,1,21,6.5v6.107A5.5,5.5,0,1,0,23.975,18H24V6.5A5.506,5.506,0,0,0,18.5,1ZM5.5,20A2.5,2.5,0,1,1,8,17.5,2.5,2.5,0,0,1,5.5,20Zm13,0A2.5,2.5,0,1,1,21,17.5,2.5,2.5,0,0,1,18.5,20Z"/></svg>
);

FiBrMusic.displayName = 'FiBrMusic';
