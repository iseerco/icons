import React from 'react';
import type { IconProps } from '../../types';

export const FiBrFemale: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20,8a8,8,0,1,0-9.5,7.854V18H9a1.5,1.5,0,0,0,0,3h1.5v1.5a1.5,1.5,0,0,0,3,0V21H15a1.5,1.5,0,0,0,0-3H13.5V15.854A8.01,8.01,0,0,0,20,8ZM7,8a5,5,0,1,1,5,5A5.006,5.006,0,0,1,7,8Z"/></svg>
);

FiBrFemale.displayName = 'FiBrFemale';
