import React from 'react';
import type { IconProps } from '../../types';

export const MoneyCheck: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,22H0V5c0-1.654,1.346-3,3-3H21c1.654,0,3,1.346,3,3V22ZM2,20H22V5c0-.551-.449-1-1-1H3c-.551,0-1,.449-1,1v15Zm18-7H12V7h8v6Zm-6-2h4v-2h-4v2Zm-4,0H4v2h6v-2Zm10,4H4v2H20v-2Z"/></svg>
);

MoneyCheck.displayName = 'MoneyCheck';
