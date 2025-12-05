import React from 'react';
import type { IconProps } from '../../types';

export const FiBsMusic: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,4a3,3,0,0,0-3-3H11A3,3,0,0,0,8,4v8.607A5.5,5.5,0,1,0,11,17.5v-.087h0V4H21v8.607A5.5,5.5,0,1,0,24,17.5v-.063h0ZM5.5,20A2.5,2.5,0,1,1,8,17.5,2.5,2.5,0,0,1,5.5,20Zm13,0A2.5,2.5,0,1,1,21,17.5,2.5,2.5,0,0,1,18.5,20Z"/></svg>
);

FiBsMusic.displayName = 'FiBsMusic';
