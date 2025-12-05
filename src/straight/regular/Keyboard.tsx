import React from 'react';
import type { IconProps } from '../../types';

export const Keyboard: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M21,6H13V2H11V6H3A3,3,0,0,0,0,9V20H24V9A3,3,0,0,0,21,6Zm1,12H2V9A1,1,0,0,1,3,8H21a1,1,0,0,1,1,1Z"/><rect x="8" y="14" width={size} height={size}/><rect x="9" y="10" width={size} height={size}/><rect x="14" y="10" width={size} height={size}/><rect x="4" y="10" width={size} height={size}/><rect x="4" y="14" width={size} height={size}/><rect x="18" y="14" width={size} height={size}/></g></svg>
);

Keyboard.displayName = 'Keyboard';
