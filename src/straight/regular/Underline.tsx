import React from 'react';
import type { IconProps } from '../../types';

export const Underline: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><path d="M12,20a8.009,8.009,0,0,1-8-8V0H6V12a6,6,0,0,0,12,0V0h2V12A8.009,8.009,0,0,1,12,20Z"/><rect y="22" width={size} height={size}/></g></svg>
);

Underline.displayName = 'Underline';
