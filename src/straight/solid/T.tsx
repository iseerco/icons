import React from 'react';
import type { IconProps } from '../../types';

export const T: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="22 0 2 0 2 2 11 2 11 24 13 24 13 2 22 2 22 0"/></svg>
);

T.displayName = 'T';
