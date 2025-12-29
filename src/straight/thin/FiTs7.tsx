import React from 'react';
import type { IconProps } from '../../types';

export const FiTs7: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="7.887 24.005 7.004 23.535 18.995 1 4 1 4 0 20 0 20 1.24 7.887 24.005"/></svg>
);

FiTs7.displayName = 'FiTs7';
