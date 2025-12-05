import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTugrikSign: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13.5,3v5.66l6.5-2.17v3.17l-6.5,2.17v2.33l6.5-2.17v3.17l-6.5,2.17v6.67h-3v-5.67l-6.5,2.17v-3.17l6.5-2.17v-2.33l-6.5,2.17v-3.17l6.5-2.17V3H2V0H22V3H13.5Z"/></svg>
);

FiBsTugrikSign.displayName = 'FiBsTugrikSign';
