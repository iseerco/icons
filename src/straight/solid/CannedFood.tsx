import React from 'react';
import type { IconProps } from '../../types';

export const CannedFood: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,8V6H18.444A3.959,3.959,0,0,0,19,4a4,4,0,0,0-4-4V2a2,2,0,0,1,0,4H0V8H1v2H19v2H1v6H19v2H1v2H0v2H24V22H23V8Z"/></svg>
);

CannedFood.displayName = 'CannedFood';
