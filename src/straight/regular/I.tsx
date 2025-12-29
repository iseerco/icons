import React from 'react';
import type { IconProps } from '../../types';

export const I: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="19 2 19 0 5 0 5 2 11 2 11 22 5 22 5 24 19 24 19 22 13 22 13 2 19 2"/></svg>
);

I.displayName = 'I';
