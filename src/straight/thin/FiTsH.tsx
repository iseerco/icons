import React from 'react';
import type { IconProps } from '../../types';

export const FiTsH: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="21 0 21 12 3 12 3 0 2 0 2 24 3 24 3 13 21 13 21 24 22 24 22 0 21 0"/></svg>
);

FiTsH.displayName = 'FiTsH';
