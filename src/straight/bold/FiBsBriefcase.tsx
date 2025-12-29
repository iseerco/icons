import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBriefcase: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,3H18V2.454A2.457,2.457,0,0,0,15.546,0H8.455A2.457,2.457,0,0,0,6,2.454V3H3A3,3,0,0,0,0,6V24H24V6A3,3,0,0,0,21,3Zm0,3v5H3V6ZM3,21V14h7v2h4V14h7v7Z"/></svg>
);

FiBsBriefcase.displayName = 'FiBsBriefcase';
