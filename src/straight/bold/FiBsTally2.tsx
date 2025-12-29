import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTally2: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m0,0h3v24H0V0Zm7,0v24h3V0h-3Z"/></svg>
);

FiBsTally2.displayName = 'FiBsTally2';
