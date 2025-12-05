import React from 'react';
import type { IconProps } from '../../types';

export const Tally4: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m2,24H0V0h2v24ZM24,0h-2v24h2V0Zm-7,0h-2v24h2V0Zm-8,0h-2v24h2V0Z"/></svg>
);

Tally4.displayName = 'Tally4';
