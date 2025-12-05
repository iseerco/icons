import React from 'react';
import type { IconProps } from '../../types';

export const Tally1: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><rect width={size} height={size}/></svg>
);

Tally1.displayName = 'Tally1';
