import React from 'react';
import type { IconProps } from '../../types';

export const FiBsPause: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M11,24H3V0h8ZM6,21H8V3H6Z"/><path d="M21,24H13V0h8Zm-5-3h2V3H16Z"/></svg>
);

FiBsPause.displayName = 'FiBsPause';
