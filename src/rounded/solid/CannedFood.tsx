import React from 'react';
import type { IconProps } from '../../types';

export const CannedFood: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23,22V8a1,1,0,0,0,0-2H18.444A4.007,4.007,0,0,0,15,0a1,1,0,0,0,0,2,2,2,0,0,1,0,4H1A1,1,0,0,0,1,8v2H18a1,1,0,0,1,0,2H1v6H18a1,1,0,0,1,0,2H1v2a1,1,0,0,0,0,2H23A1,1,0,0,0,23,22Z"/></svg>
);

CannedFood.displayName = 'CannedFood';
