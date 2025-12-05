import React from 'react';
import type { IconProps } from '../../types';

export const FiTsL: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,24H4.5c-1.378,0-2.5-1.121-2.5-2.5V0h1V21.5c0,.827,.673,1.5,1.5,1.5H22v1Z"/></svg>
);

FiTsL.displayName = 'FiTsL';
