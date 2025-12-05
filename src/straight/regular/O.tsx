import React from 'react';
import type { IconProps } from '../../types';

export const O: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12.021,24c-5.514,0-10-4.486-10-10v-4C2.021,4.486,6.507,0,12.021,0s10,4.486,10,10v4c0,5.514-4.486,10-10,10Zm0-22c-4.411,0-8,3.589-8,8v4c0,4.411,3.589,8,8,8s8-3.589,8-8v-4c0-4.411-3.589-8-8-8Z"/></svg>
);

O.displayName = 'O';
