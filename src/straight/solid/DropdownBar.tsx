import React from 'react';
import type { IconProps } from '../../types';

export const DropdownBar: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" {...props}>
  <path d="M22,15H9v-2h13v2Zm-20,1h4v-4H2v4Zm20,3H9v2h13v-2ZM2,22h4v-4H2v4ZM24,3v7H0V3C0,1.346,1.346,0,3,0H21c1.654,0,3,1.346,3,3Zm-4,1h-6.91l2.76,2.71h-.01c.39,.39,1.01,.39,1.4,0l2.76-2.71Z"/>
</svg>
);

DropdownBar.displayName = 'DropdownBar';
