import React from 'react';
import type { IconProps } from '../../types';

export const Pennant: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M3.337,3.478A2,2,0,1,0,1,3.723V24H3V20.664L23.577,12Z"/></svg>
);

Pennant.displayName = 'Pennant';
