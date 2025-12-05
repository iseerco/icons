import React from 'react';
import type { IconProps } from '../../types';

export const MoneyCheck: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M19,11h-4v-2h4v2Zm5-6V22H0V5c0-1.654,1.346-3,3-3H21c1.654,0,3,1.346,3,3ZM3,13H11v-2H3v2Zm18,2H3v2H21v-2Zm0-8H13v6h8V7Z"/></svg>
);

MoneyCheck.displayName = 'MoneyCheck';
