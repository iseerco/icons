import React from 'react';
import type { IconProps } from '../../types';

export const FiBsTally4: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m0,0h3v24H0V0Zm21,0v24h3V0h-3Zm-7,24h3V0h-3v24Zm-7,0h3V0h-3v24Z"/></svg>
);

FiBsTally4.displayName = 'FiBsTally4';
