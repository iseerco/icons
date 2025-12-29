import React from 'react';
import type { IconProps } from '../../types';

export const Square3: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16,14c0,2.206-1.794,4-4,4h-4v-2h4c1.103,0,2-.897,2-2s-.897-2-2-2h-3v-2h3c.552,0,1-.449,1-1s-.448-1-1-1h-4v-2h4c1.654,0,3,1.346,3,3,0,.68-.236,1.301-.619,1.805,.977,.73,1.619,1.885,1.619,3.195ZM24,3V24H0V3C0,1.346,1.346,0,3,0H21c1.654,0,3,1.346,3,3Zm-2,0c0-.551-.448-1-1-1H3c-.552,0-1,.449-1,1V22H22V3Z"/></svg>
);

Square3.displayName = 'Square3';
