import React from 'react';
import type { IconProps } from '../../types';

export const CircleHalf: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13,24h-1C5.38,24,0,18.62,0,12S5.38,0,12,0h1V24ZM11,2.05C5.95,2.55,2,6.82,2,12s3.95,9.45,9,9.95V2.05Z"/></svg>
);

CircleHalf.displayName = 'CircleHalf';
