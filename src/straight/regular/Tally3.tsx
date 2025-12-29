import React from 'react';
import type { IconProps } from '../../types';

export const Tally3: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m0,0h2v24H0V0Zm14,0v24h2V0h-2Zm-7,24h2V0h-2v24Z"/></svg>
);

Tally3.displayName = 'Tally3';
