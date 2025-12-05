import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBox: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,3a3,3,0,0,0-3-3H3A3,3,0,0,0,0,3v7H1V24H23V10h1ZM3,3H21V7H3ZM20,21H4V10H20Z"/><rect x="8" y="12" width={size} height={size}/></svg>
);

FiBsBox.displayName = 'FiBsBox';
