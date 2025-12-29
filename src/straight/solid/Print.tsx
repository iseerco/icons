import React from 'react';
import type { IconProps } from '../../types';

export const Print: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><rect x="5" width={size} height={size}/><rect x="6" y="15" width={size} height={size}/><path d="M21,7H3a3,3,0,0,0-3,3V20H4V13H20v7h4V10A3,3,0,0,0,21,7Zm-2,4H15V9h4Z"/></svg>
);

Print.displayName = 'Print';
