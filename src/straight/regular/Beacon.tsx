import React from 'react';
import type { IconProps } from '../../types';

export const Beacon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,0C5.38,0,0,5.38,0,12s5.38,12,12,12h12V12C24,5.38,18.62,0,12,0Zm10,22H12c-5.51,0-10-4.49-10-10S6.49,2,12,2s10,4.49,10,10v10Z"/></svg>
);

Beacon.displayName = 'Beacon';
