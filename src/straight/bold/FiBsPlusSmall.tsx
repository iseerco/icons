import React from 'react';
import type { IconProps } from '../../types';

export const FiBsPlusSmall: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="18 10.5 13.5 10.5 13.5 6 10.5 6 10.5 10.5 6 10.5 6 13.5 10.5 13.5 10.5 18 13.5 18 13.5 13.5 18 13.5 18 10.5"/></svg>
);

FiBsPlusSmall.displayName = 'FiBsPlusSmall';
