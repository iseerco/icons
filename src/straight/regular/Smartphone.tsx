import React from 'react';
import type { IconProps } from '../../types';

export const Smartphone: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M4,0V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V0ZM18,2V16H6V2ZM17,22H7a1,1,0,0,1-1-1V18H18v3A1,1,0,0,1,17,22Z"/><rect x="11" y="19" width={size} height={size}/></g></svg>
);

Smartphone.displayName = 'Smartphone';
