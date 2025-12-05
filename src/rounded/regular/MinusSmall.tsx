import React from 'react';
import type { IconProps } from '../../types';

export const MinusSmall: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={size} height={size} {...props}><rect x="6" y="11" width={size} height={size} rx="1"/></svg>
);

MinusSmall.displayName = 'MinusSmall';
