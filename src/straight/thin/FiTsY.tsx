import React from 'react';
import type { IconProps } from '../../types';

export const FiTsY: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="21.922 0 20.658 0 12 11.183 3.342 0 2.078 0 11.5 12.171 11.5 24 12.5 24 12.5 12.171 21.922 0"/></svg>
);

FiTsY.displayName = 'FiTsY';
