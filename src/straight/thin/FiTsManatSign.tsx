import React from 'react';
import type { IconProps } from '../../types';

export const FiTsManatSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,13.5v10.5h-1V13.5c0-4.8-3.77-8.73-8.5-8.99V24h-1V4.51c-4.73,.26-8.5,4.19-8.5,8.99v10.5h-1V13.5C2,8.15,6.22,3.77,11.5,3.51V0h1V3.51c5.28,.26,9.5,4.64,9.5,9.99Z"/></svg>
);

FiTsManatSign.displayName = 'FiTsManatSign';
