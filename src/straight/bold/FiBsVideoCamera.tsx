import React from 'react';
import type { IconProps } from '../../types';

export const FiBsVideoCamera: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,8.75l-3,2.237V9a3,3,0,0,0-3-3H15.679l-5.52-6H0V3H8.842L11.6,6H3A3,3,0,0,0,0,9V24H21V19.013l3,2.237ZM18,21H3V9H18Z"/></svg>
);

FiBsVideoCamera.displayName = 'FiBsVideoCamera';
